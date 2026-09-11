export interface IntelligenceContext {

userId?:string;

input:unknown;

}


export interface IntelligenceRequest {

type:string;

payload:unknown;

}


export interface IntelligenceResult {

success:boolean;

data:unknown;

}

