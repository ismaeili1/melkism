/**
 * MELKISM Provider Capability Runtime
 *
 * v0.6.0
 *
 * Provider-agnostic runtime for capability inspection
 * and operation support checks.
 */

import type {
  AINLPProviderCapability,
  AINLPProviderCapabilities,
  AINLPProviderContract,
} from '../contracts';


export class ProviderCapabilityRuntime {

  constructor(
    private readonly provider:
      AINLPProviderContract
  ) {}


  async getCapabilities():
    Promise<AINLPProviderCapabilities> {

    return this.provider.getCapabilities();
  }


  async supports(
    capability:
      AINLPProviderCapability
  ):
    Promise<boolean> {

    const capabilities =
      await this.getCapabilities();


    return capabilities.capabilities.includes(
      capability
    );
  }


  async assertSupports(
    capability:
      AINLPProviderCapability
  ):
    Promise<void> {

    const supported =
      await this.supports(
        capability
      );


    if (!supported) {

      const capabilities =
        await this.getCapabilities();


      throw new Error(
        `Provider "${capabilities.provider}" does not support "${capability}".`
      );
    }
  }


  async getProviderName():
    Promise<string> {

    const capabilities =
      await this.getCapabilities();


    return capabilities.provider;
  }


  async getSupportedLanguages():
    Promise<readonly string[]> {

    const capabilities =
      await this.getCapabilities();


    return capabilities.languages ??
      [];
  }

}
