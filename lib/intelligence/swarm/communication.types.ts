export type MessagePriority =

"low"

|

"normal"

|

"high"

|

"critical";



export interface MessageEnvelope {


id:string;


senderId:string;


receiverId?:string;


topic:string;


priority:MessagePriority;


payload:unknown;


createdAt:Date;


}



export interface AgentChannel {


id:string;


topic:string;


agents:string[];


createdAt:Date;


}



export interface CommunicationContext {


channels:AgentChannel[];


messages:MessageEnvelope[];


createdAt:Date;


}

