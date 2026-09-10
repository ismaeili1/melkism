
export interface KnowledgeRecord {


id:string;


domain:string;


content:string;


confidence:number;


createdAt:Date;


}




export interface KnowledgeExchange {


source:string;


target:string;


payload:string;


timestamp:Date;


}



