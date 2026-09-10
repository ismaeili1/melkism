
export interface KnowledgeEntity {


id:string;


name:string;


type:string;


}





export interface SemanticRelation {


source:string;


target:string;


relation:string;


weight:number;


}





export interface DiscoveryContext {


domain:string;


intent:string;


meaning:string;


}



