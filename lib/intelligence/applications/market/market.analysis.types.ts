export interface MarketAnalysisInput {


marketId:string;


data:Record<string,number>;


}



export interface MarketAnalysisSummary {


marketId:string;


trendScore:number;


priceScore:number;


demandScore:number;


investmentScore:number;


createdAt:Date;


}

