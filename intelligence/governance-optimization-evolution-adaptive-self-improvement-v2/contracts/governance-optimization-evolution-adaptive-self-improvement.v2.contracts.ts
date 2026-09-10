
export interface GovernanceOptimizationEvolutionAdaptiveSelfImprovementV2InputContract {

id:string;

adaptiveSelfImprovementId:string;

adaptiveSelfLearningStates:string[];

improvementSignals:string[];

enhancementPatterns:string[];

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfImprovementV2RecordContract {

id:string;

selfImprovementScore:number;

adaptiveScore:number;

enhancementScore:number;

memoryScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfImprovementV2EvaluationContract {

recordId:string;

improvementGain:number;

enhancementGain:number;

feedback:string;

}

