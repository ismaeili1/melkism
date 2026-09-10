/**
 * MELKISM AI Intelligence Orchestration Contract
 *
 * v0.7.0
 *
 * Technology-independent contract for coordinating
 * AI/NLP intelligence operations.
 */

import type {
  AINLPProviderCapability,
} from '../providers';


export type IntelligenceOrchestrationOperation = {

  capability:
    AINLPProviderCapability;


  provider:
    string;


  contentId:
    string;


  text:
    string;


  metadata?:
    Record<string, unknown>;

};


export type IntelligenceOrchestrationResult = {

  operation:
    AINLPProviderCapability;


  provider:
    string;


  contentId:
    string;


  result:
    unknown;


  confidence?:
    number;


  metadata?:
    Record<string, unknown>;

};


export type IntelligenceOrchestrationRequest = {

  operations:
    readonly IntelligenceOrchestrationOperation[];

};


export type IntelligenceOrchestrationResponse = {

  results:
    readonly IntelligenceOrchestrationResult[];

};


export interface IntelligenceOrchestrationContract {

  orchestrate(
    request:
      IntelligenceOrchestrationRequest
  ):
    Promise<

      IntelligenceOrchestrationResponse

    >;

}
