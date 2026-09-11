/**
 * MELKISM Intelligence Pipeline Provider Runtime Integration
 *
 * v0.6.2
 *
 * Consumer-facing runtime boundary connecting the Intelligence
 * Pipeline to the provider bridge.
 */

import type {
  AINLPProviderCapability,
  AINLPProviderContract,
} from '../../providers';

import type {
  IntelligencePipelineProviderRequest,
} from '../provider';

import {
  IntelligencePipelineProviderBridge,
} from '../provider';


export class IntelligencePipelineProviderRuntimeIntegration {

  constructor(
    private readonly bridge:
      IntelligencePipelineProviderBridge
  ) {}


  resolveProvider(
    request:
      IntelligencePipelineProviderRequest
  ):
    AINLPProviderContract {

    return this.bridge.resolve(
      request
    );

  }


  async execute(
    request:
      IntelligencePipelineProviderRequest,

    contentId:
      string,

    text:
      string,

    metadata?:
      Record<string, unknown>
  ) {

    const provider =
      this.resolveProvider(
        request
      );


    const providerRequest = {

      operation:
        request.capability,

      contentId,

      text,

      metadata,

    };


    return provider.execute(
      providerRequest
    );

  }


  async supports(
    provider:
      string,

    capability:
      AINLPProviderCapability
  ):
    Promise<boolean> {

    const selectedProvider =
      this.resolveProvider({

        provider,

        capability,

      });


    const capabilities =
      await selectedProvider
        .getCapabilities();


    return capabilities.capabilities
      .includes(
        capability
      );

  }

}
