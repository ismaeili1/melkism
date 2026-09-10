
export interface AutonomousKnowledgeKnowledgeIntegrationInput {

id:string;

knowledgeState:string;

objective:string;

context:string;

}



export interface AutonomousKnowledgeKnowledgeIntegrationRecord {

id:string;

synthesisScore:number;

wisdomScore:number;

integrationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


