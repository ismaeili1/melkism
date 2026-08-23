/**
 * MELKISM Knowledge Graph Contract
 *
 * v0.4.0
 *
 * Defines semantic relationships
 * between content entities.
 */


import type {
 KnowledgeRelationshipType,
} from "./knowledge.relationship.types";



export type KnowledgeNode = {


 id:
 string;



 entityId:
 string;


};



export type KnowledgeRelationship = {


 id:
 string;



 from:
 string;



 to:
 string;



 type:
 KnowledgeRelationshipType;



 weight?:
 number;



 metadata?:
 Record<string, unknown>;



};



export type KnowledgeGraph = {


 nodes:
 readonly KnowledgeNode[];



 relationships:
 readonly KnowledgeRelationship[];


};
