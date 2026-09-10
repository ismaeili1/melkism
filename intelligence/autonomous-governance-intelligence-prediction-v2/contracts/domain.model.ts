
export interface InferenceState {


id:string;


reasoningLevel:number;


inferenceLevel:number;


predictionLevel:number;


decisionLevel:number;


confidence:number;


timestamp:Date;


}



export interface ReasoningRelation {


source:string;


target:string;


relation:string;


weight:number;


}



