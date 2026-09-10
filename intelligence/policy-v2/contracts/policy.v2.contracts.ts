
export interface PolicyV2InputContract {

id:string;

policyContexts:string[];

policySignals:string[];

}



export interface PolicyV2RecordContract {

id:string;

policyName:string;

policyScore:number;

complianceScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface PolicyV2EvaluationContract {

recordId:string;

effectivenessScore:number;

riskScore:number;

feedback:string;

}

