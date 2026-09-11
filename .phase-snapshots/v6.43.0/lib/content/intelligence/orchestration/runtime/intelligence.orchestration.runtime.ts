/**
 * MELKISM Intelligence Orchestration Runtime
 *
 * v0.7.0
 *
 * Deterministic orchestration runtime for AI/NLP operations.
 *
 * Current execution model:
 *
 * - sequential
 * - deterministic
 * - capability-aware
 * - provider-agnostic
 * - fail-fast
 */

import type {
  IntelligenceOrchestrationContract,
  IntelligenceOrchestrationOperation,
  IntelligenceOrchestrationRequest,
  IntelligenceOrchestrationResponse,
  IntelligenceOrchestrationResult,
} from '../intelligence.orchestration.contract';

import type {
  IntelligencePipelineProviderRuntimeIntegration,
} from '../../pipeline/integration';


export class IntelligenceOrchestrationRuntime
  implements IntelligenceOrchestrationContract {

  constructor(
    private readonly pipelineProvider:
      IntelligencePipelineProviderRuntimeIntegration
  ) {}


  async orchestrate(
    request:
      IntelligenceOrchestrationRequest
  ):
    Promise<IntelligenceOrchestrationResponse> {

    const operations =
      request.operations;


    const results:
      IntelligenceOrchestrationResult[] =
        [];


    for (
      const operation
      of operations
    ) {

      await this.assertOperationSupported(
        operation
      );


      const response =
        await this.executeOperation(
          operation
        );


      results.push(
        response
      );

    }


    return {
      results,
    };

  }


  private async assertOperationSupported(
    operation:
      IntelligenceOrchestrationOperation
  ):
    Promise<void> {

    const supported =
      await this.pipelineProvider.supports(
        operation.provider,
        operation.capability
      );


    if (!supported) {

      throw new Error(
        `Provider "${operation.provider}" does not support "${operation.capability}".`
      );

    }

  }


  private async executeOperation(
    operation:
      IntelligenceOrchestrationOperation
  ):
    Promise<IntelligenceOrchestrationResult> {

    const response =
      await this.pipelineProvider.execute(

        {
          provider:
            operation.provider,

          capability:
            operation.capability,
        },

        operation.contentId,

        operation.text,

        operation.metadata

      );


    return {

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

    };

  }

}
