/**
 * MELKISM Intelligence Orchestration Composition
 *
 * v0.7.0
 *
 * Composes the orchestration runtime with the
 * provider-aware Intelligence Pipeline integration.
 */

import {
  IntelligenceOrchestrationRuntime,
} from '../runtime';

import {
  IntelligencePipelineProviderRuntimeIntegration,
} from '../../pipeline/integration';


export type IntelligenceOrchestrationCompositionDependencies = {

  pipelineProvider:
    IntelligencePipelineProviderRuntimeIntegration;

};


export function createIntelligenceOrchestrationRuntime(
  dependencies:
    IntelligenceOrchestrationCompositionDependencies
):
  IntelligenceOrchestrationRuntime {

  return new IntelligenceOrchestrationRuntime(
    dependencies.pipelineProvider
  );

}


export function createDefaultIntelligenceOrchestrationRuntime(
  dependencies:
    IntelligenceOrchestrationCompositionDependencies
):
  IntelligenceOrchestrationRuntime {

  return createIntelligenceOrchestrationRuntime(
    dependencies
  );

}
