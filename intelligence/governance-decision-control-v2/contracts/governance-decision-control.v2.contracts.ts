
export interface GovernanceDecisionControlV2InputContract {

id:string;

decisionId:string;

rules:string[];

policies:string[];

}



export interface GovernanceDecisionControlV2RecordContract {

id:string;

decisionId:string;

validationScore:number;

authorizationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceDecisionControlV2EvaluationContract {

recordId:string;

decisionRisk:number;

approvalScore:number;

feedback:string;

}

