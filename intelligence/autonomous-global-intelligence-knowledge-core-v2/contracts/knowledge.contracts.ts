
export interface AutonomousKnowledgeKnowledgeCoreInput {

id:string;

source:string;

query:string;

operation:string;

}



export interface AutonomousKnowledgeKnowledgeCoreRecord {

id:string;

knowledgeScore:number;

memoryScore:number;

evolutionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


