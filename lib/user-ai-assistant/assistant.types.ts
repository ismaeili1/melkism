export interface AssistantSession {

id:string;

userId:string;

createdAt:string;

}


export interface ConversationContext {

userId:string;

messages:string[];

}


export interface UserIntent {

userId:string;

intent:string;

}

