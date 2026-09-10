
export interface DecisionRequest {


context?:unknown;


options?:unknown[];


signals?:unknown[];


constraints?:unknown;


}



export interface DecisionResult {


id:string;


decision:string;


confidence:number;


reasoning:string[];


createdAt:Date;


}


