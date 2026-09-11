export type AgentExecutionStatus =

"started"

|

"running"

|

"completed"

|

"failed";



export interface AgentExecutionResult {


id:string;


agentId:string;


actionId:string;


status:AgentExecutionStatus;


output:unknown;


createdAt:Date;


}



export interface AgentExecutionRecord {


executionId:string;


agentId:string;


actionId:string;


startedAt:Date;


completedAt?:Date;


}

