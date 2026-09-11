export type ActionStatus =

"created"

|

"queued"

|

"executing"

|

"completed"

|

"failed";



export interface IntelligenceAction {


id:string;


name:string;


payload:unknown;


status:ActionStatus;


createdAt:Date;


}


