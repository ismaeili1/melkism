
export interface AutonomousCognitiveOSCognitiveAdaptationInput {

id:string;

osContext:string;

intelligenceContext:string;

adaptationContext:string;

objective:string;

}



export interface AutonomousCognitiveOSCognitiveAdaptationRecord {

id:string;

osScore:number;

evolutionScore:number;

adaptationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


