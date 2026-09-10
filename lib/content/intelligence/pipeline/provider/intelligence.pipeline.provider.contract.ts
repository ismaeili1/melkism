/**
 * MELKISM Intelligence Pipeline Provider Contract Bridge
 *
 * v0.6.2
 *
 * Keeps the Intelligence Pipeline independent from
 * concrete AI/NLP provider implementations.
 */

import type {
  AINLPProviderCapability,
  AINLPProviderContract,
} from '../../providers';


export type IntelligencePipelineProviderRequest = {

  provider:
    string;


  capability:
    AINLPProviderCapability;

};


export interface IntelligencePipelineProviderContract {

  resolve(
    request:
      IntelligencePipelineProviderRequest
  ):
    AINLPProviderContract;

}
