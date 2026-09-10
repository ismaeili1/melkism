
export interface AutonomousGovernancePredictionInput {

id:string;

knowledge:string[];

context:string;

}



export interface AutonomousGovernancePredictionRecord {

id:string;

reasoningScore:number;

inferenceScore:number;

predictionScore:number;

decisionScore:number;

confidence:number;

status:string;

createdAt:Date;

}


