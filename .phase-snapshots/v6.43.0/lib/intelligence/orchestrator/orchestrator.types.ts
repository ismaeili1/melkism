export type IntelligenceStage =

"feedback"

|

"learning"

|

"optimization"

|

"decision"

|

"response";



export interface IntelligenceContext {


id:string;


stage:IntelligenceStage;


input?:unknown;


output?:unknown;


createdAt:Date;


}


