/**
 * MELKISM Knowledge Graph Contract
 *
 * v0.8.0
 */


import type {
 KnowledgeEntityContract
} from "./knowledge.entity.contract";


import type {
 KnowledgeRelationContract
} from "./knowledge.relation.contract";



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



 addRelation(
   relation:
     KnowledgeRelationContract
 ):
   void;



 findRelations(
   entityId:
     string
 ):
   KnowledgeRelationContract[];



 getNeighbors(
   entityId:
     string
 ):
   KnowledgeEntityContract[];

}
