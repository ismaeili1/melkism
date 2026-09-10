
export interface AutonomousKnowledgeKnowledgeSynthesisInput {

id:string;

knowledgeState:string;

objective:string;

context:string;

}



export interface AutonomousKnowledgeKnowledgeSynthesisRecord {

id:string;

synthesisScore:number;

wisdomScore:number;

integrationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


