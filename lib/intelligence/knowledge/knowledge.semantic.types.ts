
export interface SemanticEntity {


id:string;


name:string;


domain?:string;


type?:string;


tags:string[];


metadata?:unknown;


}



export interface SemanticClassification {


entityId:string;


domain:string;


confidence:number;


}



