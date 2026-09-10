export type MarketOptimizationType =

"trend"

|

"price"

|

"demand"

|

"investment";



export interface MarketOptimizationSignal {


id:string;


marketId:string;


type:MarketOptimizationType;


currentScore:number;


targetScore:number;


improvement:number;


createdAt:Date;


}



export interface MarketOptimizationResult {


marketId:string;


signals:MarketOptimizationSignal[];


optimizedScore:number;


createdAt:Date;


}

