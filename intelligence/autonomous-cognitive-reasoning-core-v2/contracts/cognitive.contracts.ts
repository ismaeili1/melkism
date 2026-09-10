
export interface AutonomousCognitiveReasoningCoreInput {

id:string;

context:string;

objective:string;

operation:string;

}



export interface AutonomousCognitiveReasoningCoreRecord {

id:string;

reasoningScore:number;

decisionScore:number;

contextScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


