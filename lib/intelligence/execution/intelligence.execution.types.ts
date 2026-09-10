
export type IntelligenceExecutionStatus =

"queued"
|
"running"
|
"completed"
|
"failed"
|
"cancelled";



export interface IntelligenceExecutionRecord {


id:string;


agentId:string;


planId:string;


task:unknown;


status:IntelligenceExecutionStatus;


result:unknown;


createdAt:Date;


}

