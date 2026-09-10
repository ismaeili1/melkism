/**
 * MELKISM Provider Runtime Integration
 *
 * v0.6.0
 *
 * Consumer-facing boundary for Provider Registry,
 * Selection, and Capability Runtime.
 */

import type {
  AINLPProviderCapability,
  AINLPProviderContract,
} from '../contracts';

import {
  ProviderRegistryRuntime,
} from '../runtime';


export class ProviderRuntimeIntegration {

  constructor(
    private readonly registry:
      ProviderRegistryRuntime
  ) {}


  register(
    name:
      string,

    provider:
      AINLPProviderContract
  ):
    void {

    this.registry.register(
      name,
      provider
    );

  }


  unregister(
    name:
      string
  ):
    boolean {

    return this.registry.unregister(
      name
    );

  }


  listProviders():
    readonly string[] {

    return this.registry.list();

  }


  select(
    name:
      string
  ):
    AINLPProviderContract {

    return this.registry
      .createComposition()
      .select({
        provider:
          name,
      });

  }


  getCapabilities(
    name:
      string
  ) {

    return this.registry
      .createCapabilityRuntime(
        name
      )
      .getCapabilities();

  }


  supports(
    name:
      string,

    capability:
      AINLPProviderCapability
  ):
    Promise<boolean> {

    return this.registry
      .createCapabilityRuntime(
        name
      )
      .supports(
        capability
      );

  }


  assertSupports(
    name:
      string,

    capability:
      AINLPProviderCapability
  ):
    Promise<void> {

    return this.registry
      .createCapabilityRuntime(
        name
      )
      .assertSupports(
        capability
      );

  }

}
