export type RecommendationType =

"property"

|

"investment"

|

"market"

|

"architecture"

|

"urban";



export interface IntelligenceSignal {


id:string;


source:string;


value:number;


weight:number;


createdAt:Date;


}



export interface RecommendationContext {


entityId:string;


type:RecommendationType;


signals:IntelligenceSignal[];


createdAt:Date;


}



export interface IntelligenceRecommendation {


id:string;


entityId:string;


type:RecommendationType;


score:number;


summary:string;


confidence:number;


createdAt:Date;


}

