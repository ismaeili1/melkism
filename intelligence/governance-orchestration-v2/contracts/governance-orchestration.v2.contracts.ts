
export interface GovernanceOrchestrationV2InputContract {

id:string;

governanceDomains:string[];

controlPolicies:string[];

}



export interface GovernanceOrchestrationV2RecordContract {

id:string;

governanceProcessName:string;

governanceScore:number;

complianceScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOrchestrationV2EvaluationContract {

recordId:string;

systemControlScore:number;

reliabilityScore:number;

feedback:string;

}

