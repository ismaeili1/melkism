export type AIWorkflowType =
 | "search"
 | "analysis"
 | "recommendation"
 | "decision";


export interface AIRequest {

id:string;

type:AIWorkflowType;

input:string;

}


export interface AIExecutionContext {

request:AIRequest;

steps:string[];

}

