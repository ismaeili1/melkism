
export type IntelligenceEvaluationType =

"performance"
|
"accuracy"
|
"quality"
|
"efficiency"
|
"reliability";



export interface IntelligenceEvaluationRecord {


id:string;


agentId:string;


action:unknown;


score:number;


feedback:unknown;


metrics:unknown;


type:IntelligenceEvaluationType;


createdAt:Date;


}

