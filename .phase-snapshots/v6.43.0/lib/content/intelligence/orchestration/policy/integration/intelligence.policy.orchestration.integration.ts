/**
 * MELKISM Policy/Fallback Orchestration Integration
 *
 * v0.7.1
 *
 * Provider-agnostic orchestration boundary with deterministic
 * provider selection and fallback.
 */

import type {
  AINLPProviderCapability,
} from '../../../providers';

import type {
  IntelligenceOrchestrationRequest,
  IntelligenceOrchestrationResponse,
  IntelligenceOrchestrationResult,
} from '../../intelligence.orchestration.contract';

import type {
  IntelligencePipelineProviderRuntimeIntegration,
} from '../../../pipeline/integration';

import type {
  IntelligencePolicyComposition,
} from '../composition';


export type IntelligencePolicyOrchestrationRequest = {

  operations:
    readonly (
      IntelligenceOrchestrationRequest['operations'][number] & {

        candidates:
          readonly {
            provider:
              string;

            priority:
              number;
          }[];

      }
    )[];

};


export class IntelligencePolicyOrchestrationIntegration {

  constructor(
    private readonly pipelineProvider:
      IntelligencePipelineProviderRuntimeIntegration,

    private readonly policy:
      IntelligencePolicyComposition
  ) {}


  async orchestrate(
    request:
      IntelligencePolicyOrchestrationRequest
  ):
    Promise<IntelligenceOrchestrationResponse> {

    const results:
      IntelligenceOrchestrationResult[] =
        [];


    for (
      const operation
      of request.operations
    ) {

      const decision =
        this.policy.policy.select({

          capability:
            operation.capability,

          candidates:
            operation.candidates,

        });


      const attemptedProviders:
        string[] =
          [];


      let executed =
        false;


      let lastError:
        unknown =
          undefined;


      let currentProvider =
        decision.provider;


      while (!executed) {

        attemptedProviders.push(
          currentProvider
        );


        try {

          const supported =
            await this.pipelineProvider.supports(
              currentProvider,
              operation.capability
            );


          if (!supported) {

            throw new Error(
              `Provider "${currentProvider}" does not support "${operation.capability}".`
            );

          }


          const response =
            await this.pipelineProvider.execute(

              {
                provider:
                  currentProvider,

                capability:
                  operation.capability,
              },

              operation.contentId,

              operation.text,

              operation.metadata

            );


          results.push({

            operation:
              operation.capability,

            provider:
              response.provider,

            contentId:
              response.contentId,

            result:
              response.result,

            confidence:
              response.confidence,

            metadata:
              response.metadata,

          });


          executed =
            true;

        }
        catch (error) {

          lastError =
            error;


          const remainingCandidates =
            decision.candidates
              .filter(
                candidate =>
                  !attemptedProviders.includes(
                    candidate.provider
                  )
              );


          if (
            remainingCandidates.length ===
            0
          ) {
            throw lastError;
          }


          const fallbackDecision =
            this.policy.fallback.next({

              capability:
                operation.capability,

              provider:
                remainingCandidates[0].provider,

              attemptedProviders,

            });


          if (
            fallbackDecision ===
            null
          ) {
            throw lastError;
          }


          currentProvider =
            fallbackDecision.provider;

        }

      }

    }


    return {
      results,
    };

  }

}
