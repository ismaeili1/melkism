
export interface AdaptiveActionInputContract {

id:string;

actionContexts:string[];

actionSignals:string[];

}



export interface AdaptiveActionRecordContract {

id:string;

actionName:string;

actionScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveActionEvaluationContract {

recordId:string;

executionScore:number;

impactScore:number;

feedback:string;

}

