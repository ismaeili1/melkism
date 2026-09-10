
export interface AutonomousGovernanceInferenceInput {

id:string;

knowledge:string[];

context:string;

}



export interface AutonomousGovernanceInferenceRecord {

id:string;

reasoningScore:number;

inferenceScore:number;

predictionScore:number;

decisionScore:number;

confidence:number;

status:string;

createdAt:Date;

}


