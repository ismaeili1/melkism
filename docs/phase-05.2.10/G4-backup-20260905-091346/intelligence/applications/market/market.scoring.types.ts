export type MarketCategory =

"growth"

|

"stable"

|

"decline"

|

"unknown";



export interface MarketScoreInput {


marketId:string;


trendScore:number;


priceScore:number;


demandScore:number;


investmentScore:number;


}



export interface MarketScoreResult {


marketId:string;


overallScore:number;


confidence:number;


category:MarketCategory;


signals:string[];


createdAt:Date;


}

