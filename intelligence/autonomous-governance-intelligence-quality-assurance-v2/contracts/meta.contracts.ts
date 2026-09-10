
export interface AutonomousGovernanceQualityAssuranceInput {

id:string;

targetModules:string[];

context:string;

}



export interface AutonomousGovernanceQualityAssuranceRecord {

id:string;

governanceScore:number;

qualityScore:number;

policyScore:number;

complianceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


