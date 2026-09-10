
export interface AutonomousDecisionDecisionEvolutionInput {

id:string;

knowledge:string;

context:string;

objective:string;

scenario:string;

}



export interface AutonomousDecisionDecisionEvolutionRecord {

id:string;

reasoningScore:number;

decisionScore:number;

predictionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


