export type LearningCycleStatus =

"started"

|

"completed"

|

"failed";



export interface LearningCycleResult {


id:string;


status:LearningCycleStatus;


improvement:string;


createdAt:Date;


}



