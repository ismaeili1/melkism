export type KnowledgeQueryType =

"entity"

|

"relation"

|

"semantic"

|

"path";



export interface KnowledgeQuery {


id:string;


type:KnowledgeQueryType;


term:string;


depth:number;


createdAt:Date;


}



export interface KnowledgeQueryResult {


queryId:string;


entities:string[];


relations:string[];


confidence:number;


createdAt:Date;


}



export interface KnowledgeContext {


query:KnowledgeQuery;


result:KnowledgeQueryResult;


createdAt:Date;


}

