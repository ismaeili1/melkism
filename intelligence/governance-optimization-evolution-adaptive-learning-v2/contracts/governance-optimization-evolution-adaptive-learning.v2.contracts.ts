
export interface GovernanceOptimizationEvolutionAdaptiveLearningV2InputContract {

id:string;

adaptiveLearningId:string;

adaptiveStates:string[];

learningSignals:string[];

adaptationPatterns:string[];

}



export interface GovernanceOptimizationEvolutionAdaptiveLearningV2RecordContract {

id:string;

learningScore:number;

adaptationScore:number;

memoryScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionAdaptiveLearningV2EvaluationContract {

recordId:string;

learningGain:number;

adaptiveGain:number;

feedback:string;

}

