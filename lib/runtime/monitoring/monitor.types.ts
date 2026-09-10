export type MonitorStatus =

"healthy"

|

"warning"

|

"error";



export interface RuntimeMonitor {


id:string;


executionId:string;


status:MonitorStatus;


message:string;


createdAt:Date;


}


