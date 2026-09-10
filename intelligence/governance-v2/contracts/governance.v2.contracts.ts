
export interface GovernanceV2InputContract {

id:string;

governanceContexts:string[];

governanceSignals:string[];

}



export interface GovernanceV2RecordContract {

id:string;

governanceName:string;

governanceScore:number;

complianceScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceV2EvaluationContract {

recordId:string;

reliabilityScore:number;

riskScore:number;

feedback:string;

}

