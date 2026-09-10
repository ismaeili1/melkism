
export interface ExecutionV2InputContract {

id:string;

executionContexts:string[];

executionSignals:string[];

}



export interface ExecutionV2RecordContract {

id:string;

executionName:string;

executionScore:number;

completionScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface ExecutionV2EvaluationContract {

recordId:string;

resultScore:number;

efficiencyScore:number;

feedback:string;

}

