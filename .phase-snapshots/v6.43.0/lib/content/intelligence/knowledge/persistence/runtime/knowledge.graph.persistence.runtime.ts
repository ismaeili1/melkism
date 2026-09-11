/**
 * MELKISM Knowledge Graph Persistence Runtime
 *
 * v0.4.2
 *
 * Runtime boundary between knowledge graph services
 * and persistence implementations.
 */

import type {
  KnowledgeNode,
  KnowledgeRelationship,
} from '../../knowledge.graph.contract';

import type {
  KnowledgeGraphPersistenceContract,
} from '../contracts';


export class KnowledgeGraphPersistenceRuntime {

  constructor(
    private readonly persistence:
      KnowledgeGraphPersistenceContract
  ) {}


  async saveNode(
    node: KnowledgeNode
  ): Promise<KnowledgeNode> {

    return this.persistence.saveNode(
      node
    );
  }


  async findNodeById(
    id: string
  ): Promise<KnowledgeNode | null> {

    return this.persistence.findNodeById(
      id
    );
  }


  async removeNode(
    id: string
  ): Promise<boolean> {

    return this.persistence.removeNode(
      id
    );
  }


  async saveRelationship(
    relationship: KnowledgeRelationship
  ): Promise<KnowledgeRelationship> {

    return this.persistence.saveRelationship(
      relationship
    );
  }


  async findRelationshipsFrom(
    nodeId: string
  ): Promise<readonly KnowledgeRelationship[]> {

    return this.persistence.findRelationshipsFrom(
      nodeId
    );
  }


  async findRelationshipsTo(
    nodeId: string
  ): Promise<readonly KnowledgeRelationship[]> {

    return this.persistence.findRelationshipsTo(
      nodeId
    );
  }


  async removeRelationship(
    id: string
  ): Promise<boolean> {

    return this.persistence.removeRelationship(
      id
    );
  }


  async clear(): Promise<void> {

    return this.persistence.clear();
  }

}
