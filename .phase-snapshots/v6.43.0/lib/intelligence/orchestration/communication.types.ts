export type AgentMessageType =

"request"

|

"response"

|

"event"

|

"broadcast";



export interface AgentMessage {


id:string;


fromAgent:string;


toAgent:string;


type:AgentMessageType;


payload:unknown;


createdAt:Date;


}



export interface CollaborationContext {


id:string;


agents:string[];


messages:AgentMessage[];


createdAt:Date;


}

