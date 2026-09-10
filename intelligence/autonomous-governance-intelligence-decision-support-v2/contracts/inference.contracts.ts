
export interface AutonomousGovernanceDecisionSupportInput {

id:string;

knowledge:string[];

context:string;

}



export interface AutonomousGovernanceDecisionSupportRecord {

id:string;

reasoningScore:number;

inferenceScore:number;

predictionScore:number;

decisionScore:number;

confidence:number;

status:string;

createdAt:Date;

}


