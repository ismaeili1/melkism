
export interface AutonomousSelfCapabilityExpansionInput {

id:string;

objective:string;

currentCapability:string;

context:string;

}



export interface AutonomousSelfCapabilityExpansionRecord {

id:string;

organizationScore:number;

improvementScore:number;

expansionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


