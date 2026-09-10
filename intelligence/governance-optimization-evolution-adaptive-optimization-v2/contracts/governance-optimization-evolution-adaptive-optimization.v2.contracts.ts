
export interface GovernanceOptimizationEvolutionAdaptiveOptimizationV2InputContract {

id:string;

adaptiveOptimizationId:string;

optimizationStates:string[];

performanceSignals:string[];

adaptationPatterns:string[];

}



export interface GovernanceOptimizationEvolutionAdaptiveOptimizationV2RecordContract {

id:string;

adaptiveScore:number;

optimizationGain:number;

adaptationLevel:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionAdaptiveOptimizationV2EvaluationContract {

recordId:string;

adaptiveGain:number;

performanceGain:number;

feedback:string;

}

