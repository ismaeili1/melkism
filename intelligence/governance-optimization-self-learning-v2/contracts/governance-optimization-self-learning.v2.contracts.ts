
export interface GovernanceOptimizationSelfLearningV2InputContract {

id:string;

learningId:string;

optimizationMemory:string[];

learningSignals:string[];

feedback:string[];

}



export interface GovernanceOptimizationSelfLearningV2RecordContract {

id:string;

selfLearningScore:number;

adaptationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationSelfLearningV2EvaluationContract {

recordId:string;

learningEfficiency:number;

adaptationEfficiency:number;

feedback:string;

}

