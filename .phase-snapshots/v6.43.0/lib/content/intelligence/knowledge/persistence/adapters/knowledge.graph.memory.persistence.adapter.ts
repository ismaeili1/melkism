/**
 * MELKISM Knowledge Graph Memory Persistence Adapter
 *
 * v0.4.2
 *
 * In-memory implementation of the knowledge graph
 * persistence boundary.
 */

import type {
  KnowledgeNode,
  KnowledgeRelationship,
} from '../../knowledge.graph.contract';

import type {
  KnowledgeGraphPersistenceContract,
} from '../contracts';


export class KnowledgeGraphMemoryPersistenceAdapter
  implements KnowledgeGraphPersistenceContract {

  private readonly nodes =
    new Map<string, KnowledgeNode>();

  private readonly relationships =
    new Map<string, KnowledgeRelationship>();


  async saveNode(
    node: KnowledgeNode
  ): Promise<KnowledgeNode> {

    this.nodes.set(
      node.id,
      node
    );

    return node;
  }


  async findNodeById(
    id: string
  ): Promise<KnowledgeNode | null> {

    return this.nodes.get(id) ?? null;
  }


  async removeNode(
    id: string
  ): Promise<boolean> {

    const removed =
      this.nodes.delete(id);

    if (!removed) {
      return false;
    }

    for (
      const [relationshipId, relationship]
      of this.relationships
    ) {

      if (
        relationship.from === id ||
        relationship.to === id
      ) {

        this.relationships.delete(
          relationshipId
        );
      }
    }

    return true;
  }


  async saveRelationship(
    relationship: KnowledgeRelationship
  ): Promise<KnowledgeRelationship> {

    this.relationships.set(
      relationship.id,
      relationship
    );

    return relationship;
  }


  async findRelationshipsFrom(
    nodeId: string
  ): Promise<readonly KnowledgeRelationship[]> {

    return Array.from(
      this.relationships.values()
    ).filter(
      relationship =>
        relationship.from === nodeId
    );
  }


  async findRelationshipsTo(
    nodeId: string
  ): Promise<readonly KnowledgeRelationship[]> {

    return Array.from(
      this.relationships.values()
    ).filter(
      relationship =>
        relationship.to === nodeId
    );
  }


  async removeRelationship(
    id: string
  ): Promise<boolean> {

    return this.relationships.delete(id);
  }


  async clear(): Promise<void> {

    this.nodes.clear();
    this.relationships.clear();
  }

}
