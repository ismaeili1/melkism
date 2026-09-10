
export interface AdaptiveDecisionInputContract {

id:string;

decisionContexts:string[];

decisionSignals:string[];

}



export interface AdaptiveDecisionRecordContract {

id:string;

decisionAction:string;

decisionScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveDecisionEvaluationContract {

recordId:string;

accuracyScore:number;

impactScore:number;

feedback:string;

}

