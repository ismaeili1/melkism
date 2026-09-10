
export interface AutonomousGovernancePolicyManagementInput {

id:string;

targetModules:string[];

context:string;

}



export interface AutonomousGovernancePolicyManagementRecord {

id:string;

governanceScore:number;

qualityScore:number;

policyScore:number;

complianceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


