/**
 * MELKISM Local Provider Composition
 *
 * v0.6.1
 *
 * Composes the deterministic local NLP provider
 * with the common provider registry/runtime boundary.
 */

import {
  DeterministicLocalNLPProvider,
} from '../runtime';

import {
  ProviderRegistryRuntime,
} from '../../runtime';

import {
  ProviderRuntimeIntegration,
} from '../../integration';


export const LOCAL_NLP_PROVIDER_NAME =
  'local-deterministic-nlp';


export const LOCAL_NLP_REGISTRY_NAME =
  'local-nlp';


export function createLocalNLPProvider():
  DeterministicLocalNLPProvider {

  return new DeterministicLocalNLPProvider();
}


export function createLocalNLPRegistry():
  ProviderRegistryRuntime {

  const registry =
    new ProviderRegistryRuntime();

  registry.register(
    LOCAL_NLP_REGISTRY_NAME,
    createLocalNLPProvider()
  );

  return registry;
}


export function createLocalNLPProviderIntegration():
  ProviderRuntimeIntegration {

  return new ProviderRuntimeIntegration(
    createLocalNLPRegistry()
  );
}
