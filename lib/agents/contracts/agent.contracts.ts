export interface AgentInput {

id?:string;

type?:string;

payload?:unknown;

metadata?:Record<string,unknown>;

}


export interface AgentIdentity {

id:string;

name?:string;

}


export interface AgentCapability {

name:string;

}


export interface AgentMessage {

sender:string;

content:unknown;

}


export interface AgentTask {

id:string;

input:AgentInput;

}

