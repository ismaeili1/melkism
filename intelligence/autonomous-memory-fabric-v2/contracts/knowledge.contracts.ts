
export interface AutonomousKnowledgeMemoryFabricInput {

id:string;

source:string;

query:string;

operation:string;

}



export interface AutonomousKnowledgeMemoryFabricRecord {

id:string;

knowledgeScore:number;

memoryScore:number;

evolutionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


