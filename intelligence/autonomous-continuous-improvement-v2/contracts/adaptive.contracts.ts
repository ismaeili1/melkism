
export interface AutonomousAdaptiveContinuousImprovementInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousAdaptiveContinuousImprovementRecord {

id:string;

learningScore:number;

optimizationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


