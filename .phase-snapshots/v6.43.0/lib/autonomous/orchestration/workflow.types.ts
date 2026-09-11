export type WorkflowStatus =

"created"

|

"running"

|

"completed"

|

"failed";



export interface IntelligenceWorkflow {


id:string;


name:string;


tasks:string[];


status:WorkflowStatus;


createdAt:Date;


}

