
export interface AdaptiveOperationInputContract {

id:string;

operationContexts:string[];

operationSignals:string[];

}



export interface AdaptiveOperationRecordContract {

id:string;

operationName:string;

operationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface AdaptiveOperationEvaluationContract {

recordId:string;

successScore:number;

impactScore:number;

feedback:string;

}

