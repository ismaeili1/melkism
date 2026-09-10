
export interface IntelligenceAgent {


id:string;


name:string;


capability:string;


}



export interface AgentDecision {


decision:string;


confidence:number;


reason:string;


}



export interface AgentMemory {


agentId:string;


events:string[];


}



