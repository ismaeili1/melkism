
export interface OrchestrationV2InputContract {

id:string;

intelligenceModules:string[];

executionFlow:string[];

}



export interface OrchestrationV2RecordContract {

id:string;

orchestrationName:string;

coordinationScore:number;

optimizationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface OrchestrationV2EvaluationContract {

recordId:string;

systemScore:number;

stabilityScore:number;

feedback:string;

}

