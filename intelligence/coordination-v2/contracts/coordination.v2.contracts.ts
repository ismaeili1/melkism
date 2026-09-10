
export interface CoordinationV2InputContract {

id:string;

coordinationContexts:string[];

coordinationSignals:string[];

}



export interface CoordinationV2RecordContract {

id:string;

coordinationName:string;

coordinationScore:number;

synchronizationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface CoordinationV2EvaluationContract {

recordId:string;

efficiencyScore:number;

stabilityScore:number;

feedback:string;

}

