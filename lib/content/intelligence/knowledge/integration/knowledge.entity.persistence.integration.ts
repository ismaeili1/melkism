/**
 * MELKISM Knowledge Entity Persistence Integration
 *
 * v0.4.2
 *
 * Connects ContentEntity persistence with Knowledge Graph
 * node and relationship persistence.
 *
 * This integration depends on runtime boundaries only.
 */

import type {
  ContentEntity,
} from '../../entities';

import type {
  KnowledgeRelationship,
} from '../knowledge.graph.contract';

import {
  IntelligenceStorageRuntime,
} from '../../storage/runtime';

import {
  KnowledgeGraphPersistenceRuntime,
} from '../persistence/runtime';


export class KnowledgeEntityPersistenceIntegration {

  constructor(
    private readonly entityStorage:
      IntelligenceStorageRuntime,

    private readonly graphPersistence:
      KnowledgeGraphPersistenceRuntime
  ) {}


  async saveEntity(
    entity: ContentEntity
  ): Promise<ContentEntity> {

    const savedEntity =
      await this.entityStorage.save(
        entity
      );

    await this.graphPersistence.saveNode({
      id:
        entity.id,

      entityId:
        entity.id,
    });

    return savedEntity;
  }


  async findEntity(
    id: string
  ): Promise<ContentEntity | null> {

    return this.entityStorage.findById(
      id
    );
  }


  async saveRelationship(
    relationship: KnowledgeRelationship
  ): Promise<KnowledgeRelationship> {

    const fromNode =
      await this.graphPersistence.findNodeById(
        relationship.from
      );

    if (!fromNode) {
      throw new Error(
        `Relationship source node not found: ${relationship.from}`
      );
    }

    const toNode =
      await this.graphPersistence.findNodeById(
        relationship.to
      );

    if (!toNode) {
      throw new Error(
        `Relationship target node not found: ${relationship.to}`
      );
    }

    return this.graphPersistence.saveRelationship(
      relationship
    );
  }


  async removeEntity(
    id: string
  ): Promise<boolean> {

    const removed =
      await this.entityStorage.remove(
        id
      );

    if (!removed) {
      return false;
    }

    await this.graphPersistence.removeNode(
      id
    );

    return true;
  }

}
