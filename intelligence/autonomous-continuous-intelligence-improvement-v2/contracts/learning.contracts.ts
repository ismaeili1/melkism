
export interface AutonomousLearningContinuousImprovementInput {

id:string;

learningTarget:string;

operation:string;

}



export interface AutonomousLearningContinuousImprovementRecord {

id:string;

learningScore:number;

adaptationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


