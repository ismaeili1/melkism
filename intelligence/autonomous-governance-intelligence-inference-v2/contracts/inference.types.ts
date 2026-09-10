
export interface InferencePattern {

id:string;

pattern:string;

confidence:number;

}



export interface PredictionSignal {

id:string;

value:number;

probability:number;

}



export interface DecisionSupportSignal {

id:string;

recommendation:string;

confidence:number;

}



