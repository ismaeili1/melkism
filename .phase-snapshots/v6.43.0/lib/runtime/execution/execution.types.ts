export type ExecutionStatus =

"created"

|

"running"

|

"paused"

|

"completed"

|

"failed";



export interface ExecutionContext {


id:string;


workflowId:string;


status:ExecutionStatus;


startedAt?:Date;


completedAt?:Date;


}


