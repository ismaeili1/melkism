
export interface GovernanceEvolutionIntelligenceDecision {


id:string;


decision:string;


confidence:number;


reason:string;


createdAt:Date;


}



export interface GovernanceEvolutionIntelligenceMemory {


id:string;


pattern:string;


weight:number;


}



export interface GovernanceEvolutionIntelligenceProfile {


version:string;


capability:string;


level:number;


}



