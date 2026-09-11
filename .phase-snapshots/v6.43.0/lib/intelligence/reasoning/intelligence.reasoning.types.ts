
export type IntelligenceReasoningType =

"analysis"
|
"inference"
|
"planning"
|
"reflection"
|
"decision";



export interface IntelligenceReasoningRecord {


id:string;


agentId:string;


context:unknown;


hypothesis:unknown;


reasoning:unknown;


confidence:number;


type:IntelligenceReasoningType;


createdAt:Date;


}

