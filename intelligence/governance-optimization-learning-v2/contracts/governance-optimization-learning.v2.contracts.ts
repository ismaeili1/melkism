
export interface GovernanceOptimizationLearningV2InputContract {

id:string;

optimizationId:string;

learningSignals:string[];

performanceHistory:string[];

feedback:string[];

}



export interface GovernanceOptimizationLearningV2RecordContract {

id:string;

learningScore:number;

optimizationMemory:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationLearningV2EvaluationContract {

recordId:string;

adaptationScore:number;

improvementScore:number;

feedback:string;

}

