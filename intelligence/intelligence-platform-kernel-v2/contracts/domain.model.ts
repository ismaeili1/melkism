
export interface IntelligenceNode {


id:string;


type:string;


value:string;


}



export interface KnowledgeRelation {


source:string;


target:string;


relation:string;


confidence:number;


}



export interface SemanticContext {


language:string;


domain:string;


meaning:string;


}



