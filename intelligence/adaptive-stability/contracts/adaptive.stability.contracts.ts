
export interface AdaptiveStabilityInputContract {

id:string;

intelligenceStates:string[];

performanceSignals:string[];

}



export interface AdaptiveStabilityRecordContract {

id:string;

stabilityAction:string;

stabilityScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveStabilityEvaluationContract {

recordId:string;

reliabilityScore:number;

consistencyScore:number;

feedback:string;

}

