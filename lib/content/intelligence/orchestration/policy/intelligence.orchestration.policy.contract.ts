/**
 * MELKISM Intelligence Orchestration Policy Contract
 *
 * v0.7.1
 *
 * Defines provider ordering and fallback policy.
 *
 * This contract does not define retry, parallel execution,
 * or provider-specific behavior.
 */

import type {
  AINLPProviderCapability,
} from '../../providers';


export type IntelligenceProviderCandidate = {

  provider:
    string;


  priority:
    number;

};


export type IntelligenceOrchestrationPolicyRequest = {

  capability:
    AINLPProviderCapability;


  candidates:
    readonly IntelligenceProviderCandidate[];

};


export type IntelligenceOrchestrationPolicyDecision = {

  capability:
    AINLPProviderCapability;


  provider:
    string;


  fallback:
    boolean;


  candidates:
    readonly IntelligenceProviderCandidate[];

};


export interface IntelligenceOrchestrationPolicyContract {

  select(
    request:
      IntelligenceOrchestrationPolicyRequest
  ):
    IntelligenceOrchestrationPolicyDecision;

}
