
export interface GovernanceCoreV2InputContract {

id:string;

governanceRules:string[];

policies:string[];

constraints:string[];

}



export interface GovernanceCoreV2RecordContract {

id:string;

coreProcessName:string;

ruleComplianceScore:number;

decisionSafetyScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceCoreV2EvaluationContract {

recordId:string;

governanceScore:number;

riskScore:number;

feedback:string;

}

