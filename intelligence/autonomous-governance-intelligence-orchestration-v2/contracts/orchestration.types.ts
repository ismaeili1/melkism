
export interface AgentNode {

id:string;

capability:string;

status:string;

}



export interface AgentMessage {

from:string;

to:string;

payload:string;

}



export interface CoordinationPlan {

id:string;

agents:string[];

priority:number;

}



