export type MarketIntelligenceType =

"trend"

|

"price"

|

"demand"

|

"investment";



export type MarketSignalStatus =

"created"

|

"analyzed"

|

"evaluated";



export interface MarketIntelligenceSignal {


id:string;


marketId:string;


type:MarketIntelligenceType;


score:number;


status:MarketSignalStatus;


metadata?:Record<string,unknown>;


createdAt:Date;


}



export interface MarketIntelligenceResult {


marketId:string;


signals:MarketIntelligenceSignal[];


overallScore:number;


createdAt:Date;


}

