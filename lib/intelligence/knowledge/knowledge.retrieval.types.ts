
export interface KnowledgeRetrievalRequest {


query:string;


category?:string;


limit?:number;


filters?:unknown;


}



export interface KnowledgeRetrievalResult {


items:unknown[];


score:number;


metadata?:unknown;


}


