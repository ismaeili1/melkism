
export interface AutonomousGovernanceKnowledgeInput {

id:string;

data:string[];

context:string;

}



export interface AutonomousGovernanceKnowledgeRecord {

id:string;

knowledgeScore:number;

memoryScore:number;

graphScore:number;

semanticScore:number;

confidence:number;

status:string;

createdAt:Date;

}


