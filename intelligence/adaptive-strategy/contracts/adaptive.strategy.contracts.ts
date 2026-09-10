
export interface AdaptiveStrategyInputContract {

id:string;

strategicContexts:string[];

strategicSignals:string[];

}



export interface AdaptiveStrategyRecordContract {

id:string;

strategyName:string;

strategyScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveStrategyEvaluationContract {

recordId:string;

effectivenessScore:number;

impactScore:number;

feedback:string;

}

