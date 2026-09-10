
export interface AdaptiveGovernanceInputContract {

id:string;

intelligenceProcesses:string[];

governanceSignals:string[];

}



export interface AdaptiveGovernanceRecordContract {

id:string;

policyAction:string;

governanceScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveGovernanceEvaluationContract {

recordId:string;

complianceScore:number;

controlScore:number;

feedback:string;

}

