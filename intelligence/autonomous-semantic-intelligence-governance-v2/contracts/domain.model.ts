
export interface KnowledgeGraphState {


id:string;


knowledgeLevel:number;


semanticLevel:number;


relationshipLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface KnowledgeNode {


id:string;


entity:string;


meaning:string;


category:string;


}



export interface KnowledgeRelation {


source:string;


target:string;


relation:string;


weight:number;


}


