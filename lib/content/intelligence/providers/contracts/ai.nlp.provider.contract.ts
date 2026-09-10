/**
 * MELKISM AI/NLP Provider Contract
 *
 * v0.6.0
 *
 * Technology-independent boundary for AI/NLP providers.
 *
 * This contract does not depend on:
 *
 * - OpenAI SDK
 * - local model runtime
 * - cloud provider
 * - vector database
 * - vendor-specific response types
 */

export type AINLPProviderCapability =
  | 'ENTITY_EXTRACTION'
  | 'SEMANTIC_EXTRACTION'
  | 'CLASSIFICATION';


export type AINLPProviderRequest = {

  operation:
    AINLPProviderCapability;


  contentId:
    string;


  text:
    string;


  language?:
    string;


  metadata?:
    Record<string, unknown>;

};


export type AINLPProviderResponse = {

  provider:
    string;


  model?:
    string;


  operation:
    AINLPProviderCapability;


  contentId:
    string;


  result:
    unknown;


  confidence?:
    number;


  metadata?:
    Record<string, unknown>;

};


export type AINLPProviderCapabilities = {

  provider:
    string;


  capabilities:
    readonly AINLPProviderCapability[];


  languages?:
    readonly string[];

};


export interface AINLPProviderContract {

  getCapabilities():
    Promise<AINLPProviderCapabilities>;


  execute(
    request:
      AINLPProviderRequest
  ):
    Promise<AINLPProviderResponse>;

}
