
export interface AutonomousGovernanceMetaGovernanceInput {

id:string;

targetModules:string[];

context:string;

}



export interface AutonomousGovernanceMetaGovernanceRecord {

id:string;

governanceScore:number;

qualityScore:number;

policyScore:number;

complianceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


