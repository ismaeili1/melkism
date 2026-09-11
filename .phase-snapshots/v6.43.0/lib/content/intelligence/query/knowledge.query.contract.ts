/**
 * MELKISM Knowledge Query Contract
 *
 * v0.5.0
 *
 * Defines technology-independent queries over semantic knowledge
 * and the knowledge graph.
 */

import type {
  SemanticKnowledge,
} from '../semantic';

import type {
  ContentEntity,
} from '../entities';

import type {
  KnowledgeRelationship,
} from '../knowledge';


export type KnowledgeQueryRequest = {

  contentId?:
    string;

  entityId?:
    string;

  relationshipType?:
    KnowledgeRelationship['type'];

  limit?:
    number;

};


export type KnowledgeNeighborResult = {

  entity:
    ContentEntity;

  relationship:
    KnowledgeRelationship;

};


export interface KnowledgeQueryContract {

  findByContentId(
    contentId: string
  ):
    Promise<SemanticKnowledge | null>;


  findEntityById(
    entityId: string
  ):
    Promise<ContentEntity | null>;


  findOutgoingRelationships(
    entityId: string
  ):
    Promise<readonly KnowledgeRelationship[]>;


  findIncomingRelationships(
    entityId: string
  ):
    Promise<readonly KnowledgeRelationship[]>;


  findNeighbors(
    entityId: string,
    limit?: number
  ):
    Promise<readonly KnowledgeNeighborResult[]>;


  query(
    request: KnowledgeQueryRequest
  ):
    Promise<readonly SemanticKnowledge[]>;

}
