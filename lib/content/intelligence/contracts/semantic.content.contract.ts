/**
 * MELKISM Semantic Content Contract
 *
 * v0.4.0
 *
 * Defines semantic representation
 * of content intelligence.
 *
 * This contract does not know:
 *
 * - database
 * - AI provider
 * - NLP engine
 * - API
 */


export type SemanticTopic = {

 id:
 string;


 label:
 string;


 confidence:
 number;

};



export type SemanticConcept = {

 id:
 string;


 name:
 string;


 type:
 string;

};



export type SemanticContent = {

 contentId:
 string;


 topics:
 readonly SemanticTopic[];


 concepts:
 readonly SemanticConcept[];


 summary?:
 string;


 metadata?:
 Record<string, unknown>;

};
