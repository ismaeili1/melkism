
export interface AutonomousKnowledgeInsightGenerationInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousKnowledgeInsightGenerationRecord {

id:string;

knowledgeScore:number;

reasoningScore:number;

insightScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


