export type AssistantIntent =
 | "search"
 | "analysis"
 | "recommendation"
 | "knowledge"
 | "decision";


export interface AssistantMessage {

id:string;

role:"user"|"assistant";

content:string;

}


export interface AssistantContext {

sessionId:string;

messages:AssistantMessage[];

}

