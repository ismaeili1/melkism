
export interface ContinuousLearningGlobalCognitiveEvolutionInput {

id:string;

learningContext:string;

evolutionContext:string;

optimizationContext:string;

objective:string;

}



export interface ContinuousLearningGlobalCognitiveEvolutionRecord {

id:string;

learningScore:number;

evolutionScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


