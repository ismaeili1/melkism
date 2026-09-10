export type RuntimeStatus =

"idle"

|

"running"

|

"completed"

|

"failed";



export interface IntelligenceRuntime {


id:string;


pipelineId?:string;


status:RuntimeStatus;


state:Record<string,unknown>;


createdAt:Date;


updatedAt:Date;


}

