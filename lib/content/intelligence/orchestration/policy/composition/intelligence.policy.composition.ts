/**
 * MELKISM Intelligence Policy Composition
 *
 * v0.7.1
 */

import {
  DeterministicOrchestrationPolicyRuntime,
} from '../runtime';

import {
  DeterministicProviderFallbackRuntime,
} from '../runtime';


export type IntelligencePolicyCompositionDependencies = {

  policy?:
    DeterministicOrchestrationPolicyRuntime;


  fallback?:
    DeterministicProviderFallbackRuntime;

};


export type IntelligencePolicyComposition = {

  policy:
    DeterministicOrchestrationPolicyRuntime;


  fallback:
    DeterministicProviderFallbackRuntime;

};


export function createIntelligencePolicyComposition(
  dependencies:
    IntelligencePolicyCompositionDependencies = {}
):
  IntelligencePolicyComposition {

  return {

    policy:
      dependencies.policy ??
      new DeterministicOrchestrationPolicyRuntime(),

    fallback:
      dependencies.fallback ??
      new DeterministicProviderFallbackRuntime(),

  };

}


export function createDefaultIntelligencePolicyComposition():
  IntelligencePolicyComposition {

  return createIntelligencePolicyComposition();

}
