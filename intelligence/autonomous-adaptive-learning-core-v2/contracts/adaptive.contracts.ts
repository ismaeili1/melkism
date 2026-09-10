
export interface AutonomousAdaptiveLearningCoreInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousAdaptiveLearningCoreRecord {

id:string;

learningScore:number;

optimizationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


