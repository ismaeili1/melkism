export type IntelligenceCoreStatus =

"initialized"

|

"running"

|

"completed"

|

"failed";



export interface IntelligenceExecution {


id:string;


status:IntelligenceCoreStatus;


createdAt:Date;


updatedAt:Date;


}

