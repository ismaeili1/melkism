
export interface AdaptivePolicyInputContract {

id:string;

intelligenceDomains:string[];

policySignals:string[];

}



export interface AdaptivePolicyRecordContract {

id:string;

policyName:string;

policyScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptivePolicyEvaluationContract {

recordId:string;

complianceScore:number;

impactScore:number;

feedback:string;

}

