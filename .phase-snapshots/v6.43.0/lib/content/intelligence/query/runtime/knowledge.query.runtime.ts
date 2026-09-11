/**
 * MELKISM Knowledge Query Runtime
 *
 * v0.5.0
 *
 * Runtime implementation for semantic knowledge queries
 * and one-hop graph traversal.
 */

import type {
  SemanticKnowledge,
} from '../../semantic';

import type {
  ContentEntity,
} from '../../entities';

import type {
  KnowledgeRelationship,
} from '../../knowledge';

import type {
  KnowledgeQueryContract,
  KnowledgeQueryRequest,
  KnowledgeNeighborResult,
} from '../knowledge.query.contract';

import type {
  IntelligenceStorageRuntime,
} from '../../storage/runtime';

import type {
  KnowledgeGraphPersistenceRuntime,
} from '../../knowledge/persistence/runtime';


export interface SemanticKnowledgeProvider {

  findByContentId(
    contentId: string
  ):
    Promise<SemanticKnowledge | null>;

}


export class KnowledgeQueryRuntime
  implements KnowledgeQueryContract {

  constructor(
    private readonly semanticKnowledge:
      SemanticKnowledgeProvider,

    private readonly entityStorage:
      IntelligenceStorageRuntime,

    private readonly graphPersistence:
      KnowledgeGraphPersistenceRuntime
  ) {}


  async findByContentId(
    contentId: string
  ):
    Promise<SemanticKnowledge | null> {

    return this.semanticKnowledge.findByContentId(
      contentId
    );
  }


  async findEntityById(
    entityId: string
  ):
    Promise<ContentEntity | null> {

    return this.entityStorage.findById(
      entityId
    );
  }


  async findOutgoingRelationships(
    entityId: string
  ):
    Promise<readonly KnowledgeRelationship[]> {

    return this.graphPersistence.findRelationshipsFrom(
      entityId
    );
  }


  async findIncomingRelationships(
    entityId: string
  ):
    Promise<readonly KnowledgeRelationship[]> {

    return this.graphPersistence.findRelationshipsTo(
      entityId
    );
  }


  async findNeighbors(
    entityId: string,
    limit?: number
  ):
    Promise<readonly KnowledgeNeighborResult[]> {

    const relationships =
      await this.graphPersistence.findRelationshipsFrom(
        entityId
      );

    const selectedRelationships =
      typeof limit === 'number'
        ? relationships.slice(0, Math.max(0, limit))
        : relationships;


    const results:
      KnowledgeNeighborResult[] = [];


    for (
      const relationship
      of selectedRelationships
    ) {

      const entity =
        await this.entityStorage.findById(
          relationship.to
        );


      if (!entity) {
        continue;
      }


      results.push({
        entity,
        relationship,
      });

    }


    return results;
  }


  async query(
    request: KnowledgeQueryRequest
  ):
    Promise<readonly SemanticKnowledge[]> {

    if (request.contentId) {

      const result =
        await this.findByContentId(
          request.contentId
        );

      if (!result) {
        return [];
      }

      return [result];
    }


    return [];
  }

}
