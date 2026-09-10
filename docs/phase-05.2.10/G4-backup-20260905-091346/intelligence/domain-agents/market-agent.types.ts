export type MarketSignalType =

"price"

|

"demand"

|

"supply"

|

"trend"

|

"risk";



export interface MarketSignal {


id:string;


location:string;


type:MarketSignalType;


value:number;


source:string;


createdAt:Date;


}



export interface MarketAnalysisContext {


market:string;


signals:MarketSignal[];


createdAt:Date;


}



export interface MarketInsight {


id:string;


market:string;


summary:string;


confidence:number;


createdAt:Date;


}

