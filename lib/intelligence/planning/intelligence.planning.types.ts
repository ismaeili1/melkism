
export type IntelligencePlanningStatus =

"pending"
|
"running"
|
"completed"
|
"failed";



export interface IntelligencePlanningRecord {


id:string;


agentId:string;


goal:unknown;


tasks:unknown[];


priority:number;


status:IntelligencePlanningStatus;


createdAt:Date;


}

