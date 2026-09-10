
export interface AutonomousMetaContinuousIntelligenceOptimizationInput {

id:string;

agentState:string;

evolutionContext:string;

optimizationGoal:string;

}



export interface AutonomousMetaContinuousIntelligenceOptimizationRecord {

id:string;

evolutionScore:number;

optimizationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


