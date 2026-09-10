
export interface AutonomousGlobalKnowledgeReasoningFusionInput {

id:string;

cognitiveContext:string;

knowledgeContext:string;

reasoningContext:string;

objective:string;

}



export interface AutonomousGlobalKnowledgeReasoningFusionRecord {

id:string;

networkScore:number;

fabricScore:number;

fusionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


