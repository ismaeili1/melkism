
export interface GovernanceIntelligenceDecision {


id:string;


decision:string;


confidence:number;


reason:string;


createdAt:Date;


}



export interface GovernanceIntelligenceMemory {


id:string;


pattern:string;


weight:number;


}



export interface GovernanceIntelligenceCapability {


version:string;


capability:string;


level:number;


}



