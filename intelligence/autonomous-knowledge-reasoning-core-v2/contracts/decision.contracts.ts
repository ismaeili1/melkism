
export interface AutonomousDecisionKnowledgeReasoningInput {

id:string;

knowledge:string;

context:string;

objective:string;

scenario:string;

}



export interface AutonomousDecisionKnowledgeReasoningRecord {

id:string;

reasoningScore:number;

decisionScore:number;

predictionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


