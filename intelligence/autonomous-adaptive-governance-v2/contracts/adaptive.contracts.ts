
export interface AutonomousAdaptiveAdaptiveGovernanceInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousAdaptiveAdaptiveGovernanceRecord {

id:string;

learningScore:number;

optimizationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


