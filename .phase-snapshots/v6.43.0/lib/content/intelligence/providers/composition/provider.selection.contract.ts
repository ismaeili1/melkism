/**
 * MELKISM Provider Selection Contract
 *
 * v0.6.0
 */

import type {
  AINLPProviderCapability,
  AINLPProviderContract,
} from '../contracts';


export type ProviderSelectionRequest = {

  provider:
    string;


  capability?:
    AINLPProviderCapability;

};


export interface ProviderSelectionContract {

  select(
    request:
      ProviderSelectionRequest
  ):
    AINLPProviderContract;

}
