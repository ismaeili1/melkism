/**
 * MELKISM Intelligence Pipeline Provider Bridge
 *
 * v0.6.2
 */

import type {
  AINLPProviderContract,
} from '../../providers';

import {
  ProviderRuntimeIntegration,
} from '../../providers';

import type {
  IntelligencePipelineProviderContract,
  IntelligencePipelineProviderRequest,
} from './intelligence.pipeline.provider.contract';


export class IntelligencePipelineProviderBridge
  implements IntelligencePipelineProviderContract {

  constructor(
    private readonly providers:
      ProviderRuntimeIntegration
  ) {}


  resolve(
    request:
      IntelligencePipelineProviderRequest
  ):
    AINLPProviderContract {

    return this.providers.select(
      request.provider
    );

  }

}
