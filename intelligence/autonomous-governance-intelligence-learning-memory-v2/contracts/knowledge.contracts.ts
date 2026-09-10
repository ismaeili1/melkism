
export interface AutonomousGovernanceLearningMemoryInput {

id:string;

data:string[];

context:string;

}



export interface AutonomousGovernanceLearningMemoryRecord {

id:string;

knowledgeScore:number;

memoryScore:number;

graphScore:number;

semanticScore:number;

confidence:number;

status:string;

createdAt:Date;

}


