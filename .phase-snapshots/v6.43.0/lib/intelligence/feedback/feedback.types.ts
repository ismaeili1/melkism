export type FeedbackType =

"correction"

|

"evaluation"

|

"improvement"

|

"signal";



export type FeedbackStatus =

"captured"

|

"processed"

|

"applied";



export interface IntelligenceFeedback {


id:string;


sourceId:string;


source?:string;


type?:FeedbackType;


signal?:string;


message?:string;


score:number;


status:FeedbackStatus;


createdAt:Date;


}

