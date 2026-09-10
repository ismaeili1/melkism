
export interface AutonomousMetaSelfImprovementInput {

id:string;

agentState:string;

evolutionContext:string;

optimizationGoal:string;

}



export interface AutonomousMetaSelfImprovementRecord {

id:string;

evolutionScore:number;

optimizationScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


