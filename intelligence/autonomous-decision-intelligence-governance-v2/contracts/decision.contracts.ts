
export interface AutonomousDecisionDecisionGovernanceInput {

id:string;

knowledge:string;

context:string;

objective:string;

scenario:string;

}



export interface AutonomousDecisionDecisionGovernanceRecord {

id:string;

reasoningScore:number;

decisionScore:number;

predictionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


