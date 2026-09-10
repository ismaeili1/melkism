
export type IntelligenceExecutionStatus =

"created"
|
"running"
|
"completed"
|
"failed"
|
"paused";



export interface IntelligenceAgentExecutionPlan {


id:string;


task:unknown;


agents:string[];


status:IntelligenceExecutionStatus;


createdAt:Date;


}

