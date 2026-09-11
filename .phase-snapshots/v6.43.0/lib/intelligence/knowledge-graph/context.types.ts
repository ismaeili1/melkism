export type KnowledgeContextType =

"agent"

|

"decision"

|

"recommendation"

|

"analysis";



export interface KnowledgeContextRequest {


id:string;


agentId:string;


type:KnowledgeContextType;


query:string;


createdAt:Date;


}



export interface KnowledgeContextResponse {


requestId:string;


entities:string[];


relations:string[];


knowledge:string[];


confidence:number;


createdAt:Date;


}



export interface IntelligenceKnowledgeContext {


request:KnowledgeContextRequest;


response:KnowledgeContextResponse;


createdAt:Date;


}

