export type ReasoningType =

"deduction"

|

"inference"

|

"prediction"

|

"evaluation";



export interface ReasoningFact {


id:string;


source:string;


statement:string;


confidence:number;


createdAt:Date;


}



export interface InferenceRule {


id:string;


condition:string;


conclusion:string;


weight:number;


createdAt:Date;


}



export interface ReasoningContext {


id:string;


facts:ReasoningFact[];


rules:InferenceRule[];


createdAt:Date;


}



export interface ReasoningResult {


id:string;


type:ReasoningType;


conclusion:string;


confidence:number;


createdAt:Date;


}

