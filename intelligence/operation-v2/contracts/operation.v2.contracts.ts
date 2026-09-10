
export interface OperationV2InputContract {

id:string;

operationContexts:string[];

operationSignals:string[];

}



export interface OperationV2RecordContract {

id:string;

operationName:string;

operationScore:number;

stabilityScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface OperationV2EvaluationContract {

recordId:string;

performanceScore:number;

reliabilityScore:number;

feedback:string;

}

