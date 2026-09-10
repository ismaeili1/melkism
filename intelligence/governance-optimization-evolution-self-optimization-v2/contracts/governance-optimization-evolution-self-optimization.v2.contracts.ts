
export interface GovernanceOptimizationEvolutionSelfOptimizationV2InputContract {

id:string;

selfOptimizationId:string;

improvementStates:string[];

optimizationPatterns:string[];

performanceSignals:string[];

}



export interface GovernanceOptimizationEvolutionSelfOptimizationV2RecordContract {

id:string;

optimizationScore:number;

performanceGain:number;

efficiencyScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionSelfOptimizationV2EvaluationContract {

recordId:string;

optimizationGain:number;

efficiencyGain:number;

feedback:string;

}

