export type InvestmentSignalType =

"roi"

|

"risk"

|

"growth"

|

"location"

|

"market";



export interface InvestmentSignal {


id:string;


type:InvestmentSignalType;


value:number;


source:string;


createdAt:Date;


}



export interface InvestmentAnalysisContext {


assetId:string;


signals:InvestmentSignal[];


createdAt:Date;


}



export interface InvestmentInsight {


id:string;


assetId:string;


opportunityScore:number;


riskScore:number;


summary:string;


confidence:number;


createdAt:Date;


}

