
export interface MetaOrchestrationV2InputContract {

id:string;

orchestrationLayers:string[];

intelligenceDomains:string[];

}



export interface MetaOrchestrationV2RecordContract {

id:string;

metaProcessName:string;

governanceScore:number;

coordinationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface MetaOrchestrationV2EvaluationContract {

recordId:string;

systemOptimizationScore:number;

stabilityScore:number;

feedback:string;

}

