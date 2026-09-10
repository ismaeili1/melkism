
export interface StrategyV2InputContract {

id:string;

strategyContexts:string[];

strategySignals:string[];

}



export interface StrategyV2RecordContract {

id:string;

strategyName:string;

strategyScore:number;

alignmentScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface StrategyV2EvaluationContract {

recordId:string;

effectivenessScore:number;

adaptabilityScore:number;

feedback:string;

}

