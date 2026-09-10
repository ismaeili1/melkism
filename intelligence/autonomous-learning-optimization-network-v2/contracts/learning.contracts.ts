
export interface ContinuousLearningLearningOptimizationNetworkInput {

id:string;

learningContext:string;

evolutionContext:string;

optimizationContext:string;

objective:string;

}



export interface ContinuousLearningLearningOptimizationNetworkRecord {

id:string;

learningScore:number;

evolutionScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


