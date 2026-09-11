/**
 * MELKISM Advanced Knowledge Query Runtime
 *
 * v0.5.1
 *
 * Combines the base KnowledgeQueryRuntime with
 * multi-hop KnowledgeTraversalRuntime.
 */

import type {
  KnowledgeNeighborResult,
  KnowledgeQueryRequest,
} from '../../knowledge.query.contract';

import type {
  KnowledgeQueryRuntime,
} from '../../runtime';

import {
  KnowledgeTraversalRuntime,
} from './knowledge.traversal.runtime';

import type {
  AdvancedKnowledgeQueryContract,
  AdvancedKnowledgeQueryRequest,
} from '../advanced.knowledge.query.contract';

import type {
  KnowledgeTraversalRequest,
  KnowledgeTraversalResult,
} from '../knowledge.traversal.contract';


export class AdvancedKnowledgeQueryRuntime
  implements AdvancedKnowledgeQueryContract {

  constructor(
    private readonly queryRuntime:
      KnowledgeQueryRuntime,

    private readonly traversalRuntime:
      KnowledgeTraversalRuntime
  ) {}


  async queryAdvanced(
    request:
      AdvancedKnowledgeQueryRequest
  ):
    Promise<readonly KnowledgeNeighborResult[]> {

    if (!request.traversal) {
      return [];
    }


    const traversal =
      await this.traversalRuntime.traverse(
        request.traversal
      );


    const results:
      KnowledgeNeighborResult[] = [];


    for (
      const path
      of traversal.paths
    ) {

      const targetEntityId =
        path.entityIds[
          path.entityIds.length - 1
        ];


      const entity =
        await this.queryRuntime.findEntityById(
          targetEntityId
        );


      if (!entity) {
        continue;
      }


      const relationships =
        await this.queryRuntime.findOutgoingRelationships(
          request.traversal.startEntityId
        );


      const relationship =
        relationships.find(
          candidate =>
            path.relationshipIds.includes(
              candidate.id
            )
        );


      if (!relationship) {
        continue;
      }


      results.push({
        entity,
        relationship,
      });


      if (
        request.traversal.maxResults !== undefined &&
        results.length >=
          request.traversal.maxResults
      ) {
        break;
      }
    }


    return results;
  }


  async traverse(
    request:
      KnowledgeTraversalRequest
  ):
    Promise<KnowledgeTraversalResult> {

    return this.traversalRuntime.traverse(
      request
    );
  }


  async query(
    request:
      KnowledgeQueryRequest
  ) {

    return this.queryRuntime.query(
      request
    );
  }

}
