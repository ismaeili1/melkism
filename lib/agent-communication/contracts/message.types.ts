export type MessagePriority =
 | "low"
 | "normal"
 | "high";


export interface AgentMessage {

id:string;

sender:string;

receiver:string;

payload:string;

priority:MessagePriority;

timestamp:string;

}

