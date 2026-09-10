
export interface AdaptiveEvolutionOptimizationInputContract {

id:string;

adaptiveHistory:string[];

optimizationSignals:string[];

}


export interface AdaptiveEvolutionOptimizationRecordContract {

id:string;

optimizationAction:string;

optimizationScore:number;

confidence:number;

createdAt:Date;

}


export interface AdaptiveEvolutionOptimizationEvaluationContract {

recordId:string;

stabilityScore:number;

performanceScore:number;

feedback:string;

}

