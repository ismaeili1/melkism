
export interface AdaptiveExecutionInputContract {

id:string;

executionContexts:string[];

executionSignals:string[];

}



export interface AdaptiveExecutionRecordContract {

id:string;

executionName:string;

executionScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface AdaptiveExecutionEvaluationContract {

recordId:string;

completionScore:number;

impactScore:number;

feedback:string;

}

