export type ContentFeedbackType =

"quality"

|

"classification"

|

"ranking";



export interface ContentFeedbackSignal {


id:string;


contentId:string;


type:ContentFeedbackType;


score:number;


message:string;


createdAt:Date;


}



export interface ContentFeedbackResult {


contentId:string;


signals:ContentFeedbackSignal[];


createdAt:Date;


}

