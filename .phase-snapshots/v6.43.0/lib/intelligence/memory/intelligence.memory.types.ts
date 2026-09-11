
export type IntelligenceMemoryType =

"short_term"
|
"long_term"
|
"experience"
|
"knowledge"
|
"decision";



export interface IntelligenceAgentMemory {


id:string;


agentId:string;


type:IntelligenceMemoryType;


content:unknown;


createdAt:Date;


}

