/**
 * MELKISM Intelligence Orchestration Provider Integration
 *
 * v0.7.0
 *
 * Stable consumer-facing boundary over the orchestration runtime.
 */

import type {
  IntelligenceOrchestrationRequest,
  IntelligenceOrchestrationResponse,
} from '../intelligence.orchestration.contract';

import type {
  IntelligenceOrchestrationRuntime,
} from '../runtime';


export class IntelligenceOrchestrationProviderIntegration {

  constructor(
    private readonly orchestration:
      IntelligenceOrchestrationRuntime
  ) {}


  async orchestrate(
    request:
      IntelligenceOrchestrationRequest
  ):
    Promise<IntelligenceOrchestrationResponse> {

    return this.orchestration.orchestrate(
      request
    );

  }

}
