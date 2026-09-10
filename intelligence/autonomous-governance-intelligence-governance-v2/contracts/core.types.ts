
export interface AutonomousGovernanceDecision {


id:string;


decision:string;


confidence:number;


reason:string;


createdAt:Date;


}



export interface AutonomousGovernanceMemory {


id:string;


pattern:string;


weight:number;


}



export interface AutonomousGovernanceCapability {


version:string;


capability:string;


level:number;


}



