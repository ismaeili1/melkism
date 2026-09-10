
export interface KnowledgeState {


id:string;


knowledgeLevel:number;


memoryLevel:number;


graphLevel:number;


semanticLevel:number;


confidence:number;


timestamp:Date;


}



export interface KnowledgeRelation {


source:string;


target:string;


relation:string;


weight:number;


}



