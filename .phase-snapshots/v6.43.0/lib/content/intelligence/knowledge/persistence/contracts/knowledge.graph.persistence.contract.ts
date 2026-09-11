/**
 * MELKISM Knowledge Graph Persistence Contract
 *
 * v0.4.2
 *
 * Defines the persistence boundary for knowledge graph nodes
 * and relationships.
 *
 * This contract does not depend on:
 *
 * - database technology
 * - ORM
 * - graph database
 * - filesystem
 * - external service
 */

import type {
  KnowledgeNode,
  KnowledgeRelationship,
} from '../../knowledge.graph.contract';


export interface KnowledgeGraphPersistenceContract {

  saveNode(
    node: KnowledgeNode
  ): Promise<KnowledgeNode>;


  findNodeById(
    id: string
  ): Promise<KnowledgeNode | null>;


  removeNode(
    id: string
  ): Promise<boolean>;


  saveRelationship(
    relationship: KnowledgeRelationship
  ): Promise<KnowledgeRelationship>;


  findRelationshipsFrom(
    nodeId: string
  ): Promise<readonly KnowledgeRelationship[]>;


  findRelationshipsTo(
    nodeId: string
  ): Promise<readonly KnowledgeRelationship[]>;


  removeRelationship(
    id: string
  ): Promise<boolean>;


  clear(): Promise<void>;

}
