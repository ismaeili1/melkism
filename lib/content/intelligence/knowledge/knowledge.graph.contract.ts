/**
 * MELKISM Knowledge Graph Contract
 *
 * v0.8.0
 */


import type {
 KnowledgeEntityContract
} from "./contracts/knowledge.entity.contract";


import type {
 KnowledgeRelationship,
 KnowledgeRelationshipType
} from "./contracts/knowledge.relation.contract";


export type {
 KnowledgeRelationship,
 KnowledgeRelationshipType
};



export interface KnowledgeGraphContract {


 addEntity(
  entity:
   KnowledgeEntityContract
 ):
  void;



 removeEntity(
  id:
   string
 ):
  void;



 addRelationship(
  relationship:
   KnowledgeRelationship
 ):
  void;



 findRelationships(
  entityId:
   string
 ):
  readonly KnowledgeRelationship[];



 getNeighbors(
  entityId:
   string
 ):
  readonly KnowledgeEntityContract[];


}


/**
 * Compatibility Node Contract
 *
 * Used by Knowledge Graph Persistence layer.
 */

/**
 * MELKISM Knowledge Graph Node Contract
 *
 * Compatibility contract for
 * persistence and integration layers.
 */

export interface KnowledgeNode {

 id:
  string;


 entityId:
  string;


 entityType?: string;


 label?:
  string;


 type?:
  string;


 metadata?:
  Record<string, unknown>;

}
