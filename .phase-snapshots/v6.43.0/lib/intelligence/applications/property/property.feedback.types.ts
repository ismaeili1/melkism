export type PropertyFeedbackType =

"value"

|

"location"

|

"condition"

|

"investment";



export interface PropertyFeedbackSignal {


id:string;


propertyId:string;


type:PropertyFeedbackType;


score:number;


message:string;


createdAt:Date;


}



export interface PropertyFeedbackResult {


propertyId:string;


signals:PropertyFeedbackSignal[];


createdAt:Date;


}

