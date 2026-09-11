/**
 * MELKISM Provider Registry Runtime
 *
 * v0.6.0
 *
 * Runtime registry for AI/NLP providers.
 */

import type {
  AINLPProviderContract,
} from '../contracts';

import {
  ProviderCapabilityRuntime,
} from './provider.capability.runtime';

import {
  ProviderComposition,
} from '../composition';


export class ProviderRegistryRuntime {

  private readonly providers:
    Map<string, AINLPProviderContract>;


  constructor() {

    this.providers =
      new Map<string, AINLPProviderContract>();

  }


  register(
    name:
      string,

    provider:
      AINLPProviderContract
  ):
    void {

    const normalizedName =
      name.trim();

    if (!normalizedName) {
      throw new Error(
        'Provider name cannot be empty.'
      );
    }

    if (this.providers.has(
      normalizedName
    )) {
      throw new Error(
        `AI/NLP provider already registered: ${normalizedName}`
      );
    }

    this.providers.set(
      normalizedName,
      provider
    );

  }


  replace(
    name:
      string,

    provider:
      AINLPProviderContract
  ):
    void {

    const normalizedName =
      name.trim();

    if (!normalizedName) {
      throw new Error(
        'Provider name cannot be empty.'
      );
    }

    this.providers.set(
      normalizedName,
      provider
    );

  }


  unregister(
    name:
      string
  ):
    boolean {

    return this.providers.delete(
      name.trim()
    );

  }


  has(
    name:
      string
  ):
    boolean {

    return this.providers.has(
      name.trim()
    );

  }


  list():
    readonly string[] {

    return Array.from(
      this.providers.keys()
    ).sort(
      (left, right) =>
        left.localeCompare(right)
    );

  }


  get(
    name:
      string
  ):
    AINLPProviderContract {

    const provider =
      this.providers.get(
        name.trim()
      );

    if (!provider) {
      throw new Error(
        `AI/NLP provider not registered: ${name}`
      );
    }

    return provider;

  }


  createComposition():
    ProviderComposition {

    return new ProviderComposition(
      this.providers
    );

  }


  createCapabilityRuntime(
    name:
      string
  ):
    ProviderCapabilityRuntime {

    return new ProviderCapabilityRuntime(
      this.get(name)
    );

  }

}
