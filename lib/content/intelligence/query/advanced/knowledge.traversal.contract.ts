/**
 * MELKISM Knowledge Traversal Contract
 *
 * v0.5.1
 *
 * Defines multi-hop traversal requests and results.
 */

import type {
  KnowledgeRelationship,
} from '../../knowledge';


export type KnowledgeTraversalDirection =
  | 'OUTGOING'
  | 'INCOMING'
  | 'BOTH';


export type KnowledgeTraversalRequest = {

  startEntityId:
    string;


  maxDepth?:
    number;


  direction?:
    KnowledgeTraversalDirection;


  maxResults?:
    number;

};


export type KnowledgeTraversalPath = {

  entityIds:
    readonly string[];


  relationshipIds:
    readonly string[];


  depth:
    number;

};


export type KnowledgeTraversalResult = {

  startEntityId:
    string;


  paths:
    readonly KnowledgeTraversalPath[];


  visitedEntityIds:
    readonly string[];


  visitedRelationshipIds:
    readonly string[];

};


export type KnowledgeTraversalEdge = {

  relationship:
    KnowledgeRelationship;


  targetEntityId:
    string;

};
