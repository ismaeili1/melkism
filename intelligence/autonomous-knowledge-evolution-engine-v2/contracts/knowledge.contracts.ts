
export interface AutonomousKnowledgeKnowledgeEvolutionInput {

id:string;

source:string;

query:string;

operation:string;

}



export interface AutonomousKnowledgeKnowledgeEvolutionRecord {

id:string;

knowledgeScore:number;

memoryScore:number;

evolutionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


