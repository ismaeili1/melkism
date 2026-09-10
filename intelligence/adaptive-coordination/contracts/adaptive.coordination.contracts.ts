
export interface AdaptiveCoordinationInputContract {

id:string;

coordinationContexts:string[];

coordinationSignals:string[];

}



export interface AdaptiveCoordinationRecordContract {

id:string;

coordinationName:string;

coordinationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface AdaptiveCoordinationEvaluationContract {

recordId:string;

synchronizationScore:number;

impactScore:number;

feedback:string;

}

