/**
 * MELKISM Provider Reliability Composition
 *
 * v0.7.2
 */

import {
  DeterministicProviderRetryRuntime,
} from '../runtime';

import {
  DeterministicProviderCircuitBreakerRuntime,
} from '../runtime';


export type ProviderReliabilityCompositionDependencies = {

  retry?:
    DeterministicProviderRetryRuntime;


  circuitBreaker?:
    DeterministicProviderCircuitBreakerRuntime;

};


export type ProviderReliabilityComposition = {

  retry:
    DeterministicProviderRetryRuntime;


  circuitBreaker:
    DeterministicProviderCircuitBreakerRuntime;

};


export function createProviderReliabilityComposition(
  dependencies:
    ProviderReliabilityCompositionDependencies = {}
):
  ProviderReliabilityComposition {

  return {

    retry:
      dependencies.retry ??
      new DeterministicProviderRetryRuntime(),

    circuitBreaker:
      dependencies.circuitBreaker ??
      new DeterministicProviderCircuitBreakerRuntime(),

  };

}


export function createDefaultProviderReliabilityComposition():
  ProviderReliabilityComposition {

  return createProviderReliabilityComposition();

}
