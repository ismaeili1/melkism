
export interface FederationState {


id:string;


agentCount:number;


knowledgeLevel:number;


coordinationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface AgentInteraction {


sourceAgent:string;


targetAgent:string;


message:string;


result:string;


}


