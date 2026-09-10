export interface IntelligenceSignal {

id:string;

type:string;

confidence:number;

message:string;

}


export interface RecommendationItem {

id:string;

title:string;

category:string;

}


export interface AIInsightData {

summary:string;

source?:string;

}

