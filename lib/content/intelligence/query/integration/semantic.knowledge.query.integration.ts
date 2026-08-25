/**
 * MELKISM Semantic Knowledge Query Integration
 *
 * v0.5.0
 *
 * Connects the persisted SemanticKnowledge runtime
 * with the KnowledgeQueryRuntime.
 */

import {
  SemanticKnowledgeRuntime,
} from '../../semantic/persistence/runtime';

import {
  KnowledgeQueryRuntime,
} from '../runtime';

import type {
  IntelligenceStorageRuntime,
} from '../../storage/runtime';

import type {
  KnowledgeGraphPersistenceRuntime,
} from '../../knowledge/persistence/runtime';

import type {
  SemanticKnowledge,
} from '../../semantic/semantic.knowledge.contract';

import type {
  ContentEntity,
} from '../../entities';


export class SemanticKnowledgeQueryIntegration {

  private readonly query:
    KnowledgeQueryRuntime;


  constructor(
    private readonly semanticKnowledge:
      SemanticKnowledgeRuntime,

    entityStorage:
      IntelligenceStorageRuntime,

    graphPersistence:
      KnowledgeGraphPersistenceRuntime
  ) {

    this.query =
      new KnowledgeQueryRuntime(
        semanticKnowledge,
        entityStorage,
        graphPersistence,
      );
  }


  async saveKnowledge(
    contentId:
      string,

    semantic:
      SemanticKnowledge['semantic'],

    entities:
      readonly ContentEntity[],

    knowledgeNodeIds:
      readonly string[],

    relationshipIds:
      readonly string[]
  ):
    Promise<SemanticKnowledge> {

    return this.semanticKnowledge.build(
      contentId,
      semantic,
      entities,
      knowledgeNodeIds,
      relationshipIds,
    );
  }


  async findByContentId(
    contentId:
      string
  ):
    Promise<SemanticKnowledge | null> {

    return this.query.findByContentId(
      contentId
    );
  }


  async findEntityById(
    entityId:
      string
  ):
    Promise<ContentEntity | null> {

    return this.query.findEntityById(
      entityId
    );
  }


  async findOutgoingRelationships(
    entityId:
      string
  ) {
    return this.query.findOutgoingRelationships(
      entityId
    );
  }


  async findIncomingRelationships(
    entityId:
      string
  ) {
    return this.query.findIncomingRelationships(
      entityId
    );
  }


  async findNeighbors(
    entityId:
      string,

    limit?:
      number
  ) {
    return this.query.findNeighbors(
      entityId,
      limit
    );
  }


  async queryKnowledge(
    contentId:
      string
  ):
    Promise<readonly SemanticKnowledge[]> {

    return this.query.query({
      contentId,
    });
  }

}
