/**
 * MELKISM Intelligence Provider Fallback Contract
 *
 * v0.7.1
 */

import type {
  AINLPProviderCapability,
} from '../../providers';


export type IntelligenceProviderFallbackRequest = {

  capability:
    AINLPProviderCapability;


  provider:
    string;


  attemptedProviders:
    readonly string[];

};


export type IntelligenceProviderFallbackDecision = {

  provider:
    string;


  fallback:
    boolean;

};


export interface IntelligenceProviderFallbackContract {

  next(
    request:
      IntelligenceProviderFallbackRequest
  ):
    IntelligenceProviderFallbackDecision | null;

}
