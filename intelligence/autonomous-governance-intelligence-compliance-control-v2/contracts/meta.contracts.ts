
export interface AutonomousGovernanceComplianceControlInput {

id:string;

targetModules:string[];

context:string;

}



export interface AutonomousGovernanceComplianceControlRecord {

id:string;

governanceScore:number;

qualityScore:number;

policyScore:number;

complianceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


