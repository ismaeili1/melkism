
export interface AutonomousLearningExperienceOptimizationInput {

id:string;

experience:string;

knowledge:string;

context:string;

objective:string;

}



export interface AutonomousLearningExperienceOptimizationRecord {

id:string;

learningScore:number;

adaptationScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


