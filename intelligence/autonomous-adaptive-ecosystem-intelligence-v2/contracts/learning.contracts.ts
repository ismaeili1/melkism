
export interface AutonomousLearningAdaptiveIntelligenceInput {

id:string;

learningTarget:string;

operation:string;

}



export interface AutonomousLearningAdaptiveIntelligenceRecord {

id:string;

learningScore:number;

adaptationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


