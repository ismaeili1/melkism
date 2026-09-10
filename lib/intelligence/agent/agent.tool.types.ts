export type AgentToolType =

"knowledge"

|

"memory"

|

"optimization"

|

"reasoning";



export type AgentActionStatus =

"created"

|

"executing"

|

"completed"

|

"failed";



export interface AgentTool {


id:string;


name:string;


type:AgentToolType;


}



export interface AgentAction {


id:string;


agentId:string;


tool:AgentToolType;


input:unknown;


status:AgentActionStatus;


createdAt:Date;


}



export interface AgentExecutionContext {


agentId:string;


actionId:string;


tool:AgentToolType;


payload:unknown;


createdAt:Date;


}

