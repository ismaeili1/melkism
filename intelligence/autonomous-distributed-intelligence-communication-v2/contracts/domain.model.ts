
export interface AgentNetworkState {


id:string;


networkLevel:number;


communicationLevel:number;


collaborationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface AgentNode {


id:string;


role:string;


capability:string;


status:string;


}



export interface AgentConnection {


source:string;


target:string;


weight:number;


latency:number;


}


