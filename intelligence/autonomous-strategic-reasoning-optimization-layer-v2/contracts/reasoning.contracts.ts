
export interface AutonomousReasoningStrategicOptimizationInput {

id:string;

reasoningState:string;

objective:string;

context:string;

}



export interface AutonomousReasoningStrategicOptimizationRecord {

id:string;

reasoningScore:number;

decisionScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


