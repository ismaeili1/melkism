
export interface AutonomousCognitiveContextualUnderstandingInput {

id:string;

context:string;

operation:string;

}



export interface AutonomousCognitiveContextualUnderstandingRecord {

id:string;

cognitionScore:number;

reasoningScore:number;

contextScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


