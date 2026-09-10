
export interface AutonomousEvolutionSelfOptimizationInput {

id:string;

evolutionTarget:string;

operation:string;

}



export interface AutonomousEvolutionSelfOptimizationRecord {

id:string;

evolutionScore:number;

strategyScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


