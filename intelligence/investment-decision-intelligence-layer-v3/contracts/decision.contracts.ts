
export interface DecisionRequest {


id:string;


domain:string;


input:string;


}



export interface DecisionResponse {


id:string;


decision:string;


confidence:number;


}



export interface IntelligencePrediction {


metric:string;


value:number;


}


export interface StrategyRecommendation {


objective:string;


actions:string[];


}



