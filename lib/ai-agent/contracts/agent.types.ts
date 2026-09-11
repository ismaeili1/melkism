export type AgentStatus =

 | "registered"
 | "approved"
 | "blocked";


export interface AIAgentIdentity {

id:string;

name:string;

status:AgentStatus;

}


export interface AgentRequest {

agent:AIAgentIdentity;

}


