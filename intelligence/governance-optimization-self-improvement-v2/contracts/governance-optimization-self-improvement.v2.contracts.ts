
export interface GovernanceOptimizationSelfImprovementV2InputContract {

id:string;

improvementId:string;

learningState:string[];

performanceMetrics:string[];

feedback:string[];

}



export interface GovernanceOptimizationSelfImprovementV2RecordContract {

id:string;

improvementScore:number;

enhancementScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationSelfImprovementV2EvaluationContract {

recordId:string;

capabilityGain:number;

efficiencyGain:number;

feedback:string;

}

