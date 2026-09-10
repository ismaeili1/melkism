
export interface KnowledgeNode {

id:string;

label:string;

weight:number;

}



export interface KnowledgeEdge {

source:string;

target:string;

relation:string;

weight:number;

}



export interface SemanticConcept {

id:string;

meaning:string;

confidence:number;

}



