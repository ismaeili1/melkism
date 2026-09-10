
export interface AdaptiveEvaluationInputContract {

id:string;

intelligenceOutputs:string[];

evaluationSignals:string[];

}



export interface AdaptiveEvaluationRecordContract {

id:string;

evaluationAction:string;

evaluationScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveEvaluationResultContract {

recordId:string;

qualityScore:number;

performanceScore:number;

feedback:string;

}

