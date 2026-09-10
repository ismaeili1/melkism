
export interface AutonomousSemanticKnowledgeGraphInput {

id:string;

entity:string;

concept:string;

context:string;

domain:string;

}



export interface AutonomousSemanticKnowledgeGraphRecord {

id:string;

knowledgeScore:number;

semanticScore:number;

relationshipScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


