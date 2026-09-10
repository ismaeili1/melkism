
export interface GovernancePolicyV2InputContract {

id:string;

policyName:string;

rules:string[];

constraints:string[];

}



export interface GovernancePolicyV2RecordContract {

id:string;

policyName:string;

complianceScore:number;

enforcementScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernancePolicyV2EvaluationContract {

recordId:string;

policyScore:number;

riskLevel:number;

feedback:string;

}

