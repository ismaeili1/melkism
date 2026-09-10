
export interface GovernanceOptimizationEvolutionAdaptiveSelfLearningV2InputContract {

id:string;

adaptiveSelfLearningId:string;

adaptiveLearningStates:string[];

selfLearningSignals:string[];

selfAdaptationPatterns:string[];

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfLearningV2RecordContract {

id:string;

selfLearningScore:number;

adaptiveScore:number;

memoryScore:number;

adaptationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionAdaptiveSelfLearningV2EvaluationContract {

recordId:string;

selfLearningGain:number;

adaptationGain:number;

feedback:string;

}

