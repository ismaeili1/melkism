
export interface CollectiveIntelligenceState {


id:string;


collectiveLevel:number;


coordinationLevel:number;


knowledgeSharingLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface SwarmAgentRelation {


agentA:string;


agentB:string;


interactionScore:number;


}



export interface CollectiveKnowledgeFlow {


source:string;


target:string;


transferScore:number;


}


