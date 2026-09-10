
export interface AutonomousCognitiveAdvancedReasoningInput {

id:string;

source:string;

objective:string;

context:string;

}



export interface AutonomousCognitiveAdvancedReasoningRecord {

id:string;

synthesisScore:number;

reasoningScore:number;

contextScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


