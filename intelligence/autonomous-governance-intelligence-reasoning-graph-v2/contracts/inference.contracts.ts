
export interface AutonomousGovernanceReasoningGraphInput {

id:string;

knowledge:string[];

context:string;

}



export interface AutonomousGovernanceReasoningGraphRecord {

id:string;

reasoningScore:number;

inferenceScore:number;

predictionScore:number;

decisionScore:number;

confidence:number;

status:string;

createdAt:Date;

}


