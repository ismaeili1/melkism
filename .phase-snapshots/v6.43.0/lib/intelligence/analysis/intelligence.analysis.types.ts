
export interface AnalysisRequest {


id:string;


context?:unknown;


knowledge?:unknown[];


parameters?:unknown;


}



export interface AnalysisInsight {


id:string;


summary:string;


confidence:number;


signals:string[];


createdAt:Date;


}



