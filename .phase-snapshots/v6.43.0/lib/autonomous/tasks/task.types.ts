export type TaskStatus =

"pending"

|

"ready"

|

"completed";



export interface IntelligenceTask {


id:string;


title:string;


description:string;


status:TaskStatus;


parentId?:string;


createdAt:Date;


}



