
export interface AutonomousCognitiveContextualFusionInput {

id:string;

source:string;

objective:string;

context:string;

}



export interface AutonomousCognitiveContextualFusionRecord {

id:string;

synthesisScore:number;

reasoningScore:number;

contextScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


