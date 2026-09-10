
export interface AutonomousSelfContinuousImprovementInput {

id:string;

objective:string;

currentCapability:string;

context:string;

}



export interface AutonomousSelfContinuousImprovementRecord {

id:string;

organizationScore:number;

improvementScore:number;

expansionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


