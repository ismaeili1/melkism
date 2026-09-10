export type PredictionType =

"trend"

|

"market"

|

"investment"

|

"behavior"

|

"risk";



export interface PatternSignal {


id:string;


name:string;


value:number;


timestamp:Date;


}



export interface PredictionContext {


entityId:string;


type:PredictionType;


patterns:PatternSignal[];


createdAt:Date;


}



export interface PredictionResult {


id:string;


entityId:string;


prediction:string;


score:number;


confidence:number;


createdAt:Date;


}

