
export interface AutonomousKnowledgeReasoningFusionInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousKnowledgeReasoningFusionRecord {

id:string;

knowledgeScore:number;

reasoningScore:number;

insightScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


