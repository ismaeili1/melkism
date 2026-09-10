
export interface AutonomousAdaptiveOptimizationEngineInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousAdaptiveOptimizationEngineRecord {

id:string;

learningScore:number;

optimizationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


