
export interface PredictionRequest {


id:string;


context?:unknown;


signals?:unknown[];


horizon?:string;


parameters?:unknown;


}



export interface PredictionResult {


id:string;


value:unknown;


confidence:number;


factors:string[];


createdAt:Date;


}



