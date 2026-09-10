
export interface AutonomousUniversalAdaptiveEvolutionInput {

id:string;

domain:string;

knowledge:string;

objective:string;

context:string;

}



export interface AutonomousUniversalAdaptiveEvolutionRecord {

id:string;

reasoningScore:number;

adaptationScore:number;

transferScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


