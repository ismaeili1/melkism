
export interface AutonomousGovernanceKnowledgeGraphInput {

id:string;

data:string[];

context:string;

}



export interface AutonomousGovernanceKnowledgeGraphRecord {

id:string;

knowledgeScore:number;

memoryScore:number;

graphScore:number;

semanticScore:number;

confidence:number;

status:string;

createdAt:Date;

}


