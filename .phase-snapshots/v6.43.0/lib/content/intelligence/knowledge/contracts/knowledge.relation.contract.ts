/**
 * MELKISM Knowledge Relation Contract
 *
 * v0.8.0
 */

import type {
 KnowledgeEntityId
} from "./knowledge.entity.contract";


export type KnowledgeRelationType =

 | "contains"
 | "belongs_to"
 | "related_to"
 | "influences"
 | "depends_on"
 | "located_in"
 | "derived_from"
 | "unknown";



export interface KnowledgeRelationContract {

 id:
   string;


 source:
   KnowledgeEntityId;


 relation:
   KnowledgeRelationType;


 target:
   KnowledgeEntityId;


 weight?:
   number;


 metadata?:
   Record<string, unknown>;

}


/**
 * Backward compatibility alias
 *
 * Used by existing Knowledge Query layer.
 */

/**
 * Legacy Query Relationship Compatibility Contract
 */

export type KnowledgeRelationshipType =
  KnowledgeRelationType;


export interface KnowledgeRelationship {

 id:
   string;


 from:
   KnowledgeEntityId;


 to:
   KnowledgeEntityId;


 type:
   KnowledgeRelationType;


 metadata?:
   Record<string, unknown>;

}



