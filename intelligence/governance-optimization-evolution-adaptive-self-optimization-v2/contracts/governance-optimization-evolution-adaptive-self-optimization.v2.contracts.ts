
export interface GovernanceOptimizationEvolutionAdaptiveSelfOptimizationV2InputContract {

id:string;

adaptiveSelfOptimizationId:string;

selfImprovementStates:string[];

optimizationSignals:string[];

evolutionPatterns:string[];

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfOptimizationV2RecordContract {

id:string;

selfOptimizationScore:number;

optimizationScore:number;

enhancementScore:number;

memoryScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfOptimizationV2EvaluationContract {

recordId:string;

selfOptimizationGain:number;

optimizationGain:number;

feedback:string;

}

