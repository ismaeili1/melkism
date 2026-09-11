export type ResponseStatus =

"generated"

|

"delivered"

|

"archived";



export interface AdaptiveResponse {


id:string;


decisionId?:string;


content:string;


confidence:number;


status:ResponseStatus;


createdAt:Date;


}

