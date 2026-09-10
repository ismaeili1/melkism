
export interface CognitiveSynthesisIntelligenceIntegrationInput {

id:string;

knowledgeContext:string;

learningContext:string;

intelligenceContext:string;

fusionContext:string;

objective:string;

}



export interface CognitiveSynthesisIntelligenceIntegrationRecord {

id:string;

synthesisScore:number;

integrationScore:number;

fusionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


