/**
 * MELKISM Advanced Knowledge Query Contract
 *
 * v0.5.1
 */

import type {
  KnowledgeQueryRequest,
  KnowledgeNeighborResult,
} from '../knowledge.query.contract';

import type {
  KnowledgeTraversalRequest,
  KnowledgeTraversalResult,
} from './knowledge.traversal.contract';


export type AdvancedKnowledgeQueryRequest =
  KnowledgeQueryRequest & {

    traversal?:
      KnowledgeTraversalRequest;

  };


export interface AdvancedKnowledgeQueryContract {

  queryAdvanced(
    request:
      AdvancedKnowledgeQueryRequest
  ):
    Promise<readonly KnowledgeNeighborResult[]>;


  traverse(
    request:
      KnowledgeTraversalRequest
  ):
    Promise<KnowledgeTraversalResult>;

}
