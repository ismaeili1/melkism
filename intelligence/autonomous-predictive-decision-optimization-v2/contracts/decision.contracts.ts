
export interface AutonomousDecisionPredictiveOptimizationInput {

id:string;

knowledge:string;

context:string;

objective:string;

scenario:string;

}



export interface AutonomousDecisionPredictiveOptimizationRecord {

id:string;

reasoningScore:number;

decisionScore:number;

predictionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


