
export interface AutonomousReflectiveLearningOptimizationInput {

id:string;

learningState:string;

objective:string;

context:string;

}



export interface AutonomousReflectiveLearningOptimizationRecord {

id:string;

learningScore:number;

evolutionScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


