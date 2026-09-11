export type RuntimeStatus =

 | "created"
 | "approved"
 | "blocked";


export interface AgentRuntimeRequest {

agentId:string;

task:string;

}


export interface AgentRuntimeResult {

status:RuntimeStatus;

message:string;

}


