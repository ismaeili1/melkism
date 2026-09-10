
export interface GovernanceOptimizationIntelligenceV2InputContract {

id:string;

optimizationState:string[];

performanceHistory:string[];

feedback:string[];

}



export interface GovernanceOptimizationIntelligenceV2RecordContract {

id:string;

intelligenceScore:number;

optimizationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationIntelligenceV2EvaluationContract {

recordId:string;

efficiency:number;

improvement:number;

feedback:string;

}

