
export interface LearningEvolutionState {


id:string;


learningLevel:number;


adaptationLevel:number;


optimizationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface ExperienceMemory {


id:string;


experience:string;


result:string;


value:number;


}



export interface KnowledgeEvolution {


source:string;


target:string;


change:number;


reason:string;


}


