
export interface MarketSignal {


id:string;


region:string;


value:number;


}



export interface MarketDataRequest {


source:string;


category:string;


timestamp:Date;


}



export interface MarketIntelligenceState {


status:string;


confidence:number;


}



