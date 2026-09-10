
export interface AdaptiveBenchmarkInputContract {

id:string;

intelligenceCapabilities:string[];

benchmarkSignals:string[];

}



export interface AdaptiveBenchmarkRecordContract {

id:string;

benchmarkAction:string;

benchmarkScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveBenchmarkEvaluationContract {

recordId:string;

performanceScore:number;

qualityScore:number;

feedback:string;

}

