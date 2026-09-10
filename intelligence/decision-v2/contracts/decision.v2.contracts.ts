
export interface DecisionV2InputContract {

id:string;

decisionContexts:string[];

decisionSignals:string[];

}



export interface DecisionV2RecordContract {

id:string;

decisionName:string;

decisionScore:number;

confidence:number;

priority:number;

status:string;

createdAt:Date;

}



export interface DecisionV2EvaluationContract {

recordId:string;

accuracyScore:number;

impactScore:number;

feedback:string;

}

