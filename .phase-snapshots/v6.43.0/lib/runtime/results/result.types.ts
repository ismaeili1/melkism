export type ResultStatus =

"success"

|

"failure"

|

"pending";



export interface ExecutionResult {


id:string;


actionId:string;


status:ResultStatus;


data:unknown;


score:number;


createdAt:Date;


}


