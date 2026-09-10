export type AgentTaskType =

"analyze"

|

"research"

|

"recommend"

|

"optimize";



export type AgentTaskStatus =

"pending"

|

"running"

|

"completed"

|

"failed";



export interface AgentTask {


id:string;


agentId:string;


type:AgentTaskType;


goal:string;


priority:number;


status:AgentTaskStatus;


createdAt:Date;


}



export interface AgentPlan {


agentId:string;


tasks:AgentTask[];


createdAt:Date;


}

