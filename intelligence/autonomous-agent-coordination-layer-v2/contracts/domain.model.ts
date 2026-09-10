
export interface AgentNetworkState {


id:string;


collaborationLevel:number;


cognitionLevel:number;


coordinationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface AgentExchangeCycle {


cycleId:string;


sourceAgent:string;


targetAgent:string;


sharedContext:string;


}



export interface DistributedNode {


nodeId:string;


agentType:string;


connectivity:number;


}


