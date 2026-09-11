/**
 * MELKISM Semantic Retrieval Contract
 *
 * v0.5.2
 *
 * Defines the boundary between content retrieval and
 * semantic knowledge context.
 *
 * This contract does not depend on:
 *
 * - AI provider
 * - vector database
 * - ranking implementation
 * - search engine implementation
 */

import type {
  ContentEntity,
} from '../../intelligence/entities';

import type {
  SemanticKnowledge,
} from '../../intelligence/semantic';

import type {
  KnowledgeTraversalPath,
} from '../../intelligence/query/advanced';


export type SemanticRetrievalRequest = {

  query:
    string;


  contentId?:
    string;


  entityId?:
    string;


  maxDepth?:
    number;


  maxResults?:
    number;

};


export type SemanticRetrievalContext = {

  knowledge?:
    SemanticKnowledge | null;


  entities:
    readonly ContentEntity[];


  paths:
    readonly KnowledgeTraversalPath[];

};


export type SemanticRetrievalResult = {

  contentId:
    string;


  score:
    number;


  context:
    SemanticRetrievalContext;


  matchedTerms:
    readonly string[];


  metadata?:
    Record<string, unknown>;

};


export interface SemanticRetrievalContract {

  retrieve(
    request:
      SemanticRetrievalRequest
  ):
    Promise<
      readonly SemanticRetrievalResult[]
    >;

}
