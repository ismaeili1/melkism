
export interface AdaptiveSelfEvolutionOptimizationInput {

id:string;

improvementStates:string[];

optimizationSignals:string[];

}


export interface AdaptiveSelfEvolutionOptimizationRecord {

id:string;

optimizationScore:number;

evolutionScore:number;

confidence:number;

status:string;

createdAt:Date;

}

