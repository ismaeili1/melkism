
export type IntelligenceFeedbackType =

"success"
|
"failure"
|
"improvement"
|
"correction"
|
"optimization";



export interface IntelligenceFeedbackRecord {


id:string;


agentId:string;


executionId:string;


feedback:unknown;


score:number;


impact:unknown;


type:IntelligenceFeedbackType;


createdAt:Date;


}

