export type FeedbackType =

"positive"

|

"negative"

|

"neutral";



export interface IntelligenceFeedback {


id:string;


type:FeedbackType;


input:unknown;


result:unknown;


score:number;


createdAt:Date;


}


