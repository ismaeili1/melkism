export type MarketFeedbackType =

"trend"

|

"price"

|

"demand"

|

"investment";



export interface MarketFeedbackSignal {


id:string;


marketId:string;


type:MarketFeedbackType;


score:number;


message:string;


createdAt:Date;


}



export interface MarketFeedbackResult {


marketId:string;


signals:MarketFeedbackSignal[];


createdAt:Date;


}

