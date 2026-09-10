
export interface AutonomousDecisionDecisionGovernanceInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousDecisionDecisionGovernanceRecord {

id:string;

decisionScore:number;

actionScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


