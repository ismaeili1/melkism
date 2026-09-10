
export interface AutonomousMetaSelfEvolutionInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousMetaSelfEvolutionRecord {

id:string;

metaLearningScore:number;

evolutionScore:number;

capabilityScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


