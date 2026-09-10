/**
 * MELKISM Reliable Orchestration Provider Integration
 *
 * v0.7.2
 *
 * Combines:
 *
 * - deterministic provider policy
 * - provider fallback
 * - circuit breaker
 * - retry runtime
 *
 * Provider selection remains policy-driven.
 * Reliability remains provider-agnostic.
 */

import type {
  AINLPProviderContract,
  AINLPProviderRequest,
} from '../../providers';

import type {
  IntelligencePipelineProviderRuntimeIntegration,
} from '../../pipeline/integration';

import type {
  IntelligencePolicyComposition,
} from '../policy/composition';

import type {
  ProviderReliabilityComposition,
} from '../../reliability/composition';

import type {
  ProviderRetryPolicy,
} from '../../reliability';

import type {
  IntelligenceOrchestrationRequest,
  IntelligenceOrchestrationResponse,
  IntelligenceOrchestrationResult,
} from '../intelligence.orchestration.contract';


export type ReliableOrchestrationOperation =
  IntelligenceOrchestrationRequest['operations'][number] & {

    candidates:
      readonly {
        provider:
          string;

        priority:
          number;
      }[];

    retryPolicy?:
      ProviderRetryPolicy;

  };


export type ReliableOrchestrationRequest = {

  operations:
    readonly ReliableOrchestrationOperation[];

};


export class ReliableOrchestrationProviderIntegration {

  constructor(
    private readonly pipelineProvider:
      IntelligencePipelineProviderRuntimeIntegration,

    private readonly policy:
      IntelligencePolicyComposition,

    private readonly reliability:
      ProviderReliabilityComposition
  ) {}


  async orchestrate(
    request:
      ReliableOrchestrationRequest
  ):
    Promise<IntelligenceOrchestrationResponse> {

    const results:
      IntelligenceOrchestrationResult[] =
        [];


    for (
      const operation
      of request.operations
    ) {

      const policyDecision =
        this.policy.policy.select({

          capability:
            operation.capability,

          candidates:
            operation.candidates,

        });


      const attemptedProviders:
        string[] =
          [];


      let currentProvider =
        policyDecision.provider;


      while (true) {

        if (
          attemptedProviders.includes(
            currentProvider
          )
        ) {

          throw new Error(
            `Provider already attempted: ${currentProvider}`
          );

        }


        attemptedProviders.push(
          currentProvider
        );


        const provider =
          this.pipelineProvider.resolveProvider({

            provider:
              currentProvider,

            capability:
              operation.capability,

          });


        try {

          const response =
            await this.executeReliable(

              provider,

              currentProvider,

              operation,

              operation.retryPolicy

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


          break;

        }
        catch (error) {

          const remainingCandidates =
            policyDecision.candidates.filter(
              candidate =>
                !attemptedProviders.includes(
                  candidate.provider
                )
            );


          if (
            remainingCandidates.length ===
            0
          ) {
            throw error;
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
            throw error;
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


  private async executeReliable(
    provider:
      AINLPProviderContract,

    providerName:
      string,

    operation:
      ReliableOrchestrationOperation,

    retryPolicy?:
      ProviderRetryPolicy
  ) {

    return this.reliabilityIntegration()
      .execute(

        provider,

        {

          provider:
            providerName,

          request: {

            operation:
              operation.capability,

            contentId:
              operation.contentId,

            text:
              operation.text,

            metadata:
              operation.metadata,

          },

          retryPolicy,

        }

      );

  }


  private reliabilityIntegration() {

    return new ReliabilityExecutionAdapter(
      this.reliability
    );

  }

}


class ReliabilityExecutionAdapter {

  constructor(
    private readonly reliability:
      ProviderReliabilityComposition
  ) {}


  async execute(
    provider:
      AINLPProviderContract,

    execution: {
      provider:
        string;

      request: {
        operation:
          AINLPProviderRequest['operation'];

        contentId:
          string;

        text:
          string;

        metadata?:
          Record<string, unknown>;
      };

      retryPolicy?:
        ProviderRetryPolicy;
    }
  ) {

    let attempt =
      1;


    const policy =
      execution.retryPolicy ??
      {
        maxAttempts:
          3,

        backoffMs:
          250,

        maxBackoffMs:
          2000,
      };


    while (true) {

      if (
        !this.reliability.circuitBreaker.allow(
          execution.provider
        )
      ) {

        throw new Error(
          `Provider circuit is OPEN: ${execution.provider}`
        );

      }


      try {

        const response =
          await provider.execute(
            execution.request
          );


        this.reliability.circuitBreaker
          .recordSuccess(
            execution.provider
          );


        return response;

      }
      catch (error) {

        this.reliability.circuitBreaker
          .recordFailure(
            execution.provider
          );


        const decision =
          this.reliability.retry.decide(

            {

              provider:
                execution.provider,

              operation:
                execution.request.operation,

              attempt,

              error,

            },

            policy

          );


        if (!decision.retry) {
          throw error;
        }


        attempt =
          decision.nextAttempt;

      }

    }

  }

}
