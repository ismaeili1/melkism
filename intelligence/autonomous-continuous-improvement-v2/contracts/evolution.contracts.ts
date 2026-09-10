
export interface AutonomousEvolutionContinuousImprovementInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousEvolutionContinuousImprovementRecord {

id:string;

evolutionScore:number;

capabilityScore:number;

improvementScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


