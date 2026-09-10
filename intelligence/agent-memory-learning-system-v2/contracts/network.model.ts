
export interface AgentNode {


id:string;


name:string;


capability:string;


}



export interface AgentConnection {


source:string;


target:string;


type:string;


strength:number;


}



export interface SharedAgentMemory {


agentId:string;


knowledge:string[];


}



