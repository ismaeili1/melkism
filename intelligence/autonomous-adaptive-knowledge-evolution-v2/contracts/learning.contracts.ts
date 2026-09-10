
export interface AutonomousLearningKnowledgeEvolutionInput {

id:string;

experience:string;

knowledge:string;

context:string;

objective:string;

}



export interface AutonomousLearningKnowledgeEvolutionRecord {

id:string;

learningScore:number;

adaptationScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


