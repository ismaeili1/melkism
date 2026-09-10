
export interface AdaptiveReliabilityInputContract {

id:string;

intelligenceRecords:string[];

validationSignals:string[];

}


export interface AdaptiveReliabilityRecordContract {

id:string;

reliabilityAction:string;

reliabilityScore:number;

confidence:number;

createdAt:Date;

}


export interface AdaptiveReliabilityEvaluationContract {

recordId:string;

accuracyScore:number;

consistencyScore:number;

feedback:string;

}

