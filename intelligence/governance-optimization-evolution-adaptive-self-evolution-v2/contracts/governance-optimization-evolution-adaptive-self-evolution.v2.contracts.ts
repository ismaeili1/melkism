
export interface GovernanceOptimizationEvolutionAdaptiveSelfEvolutionV2InputContract {

id:string;

adaptiveSelfEvolutionId:string;

selfOptimizationStates:string[];

evolutionSignals:string[];

evolutionPatterns:string[];

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfEvolutionV2RecordContract {

id:string;

selfEvolutionScore:number;

optimizationScore:number;

evolutionScore:number;

memoryScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfEvolutionV2EvaluationContract {

recordId:string;

evolutionGain:number;

optimizationGain:number;

feedback:string;

}

