export type UserFeedbackType =

"behavior"

|

"preference"

|

"activity"

|

"engagement";



export interface UserFeedbackSignal {


id:string;


userId:string;


type:UserFeedbackType;


score:number;


message:string;


createdAt:Date;


}



export interface UserFeedbackResult {


userId:string;


signals:UserFeedbackSignal[];


createdAt:Date;


}

