
export interface ActionV2InputContract {

id:string;

actionContexts:string[];

actionSignals:string[];

}



export interface ActionV2RecordContract {

id:string;

actionName:string;

actionScore:number;

executionPriority:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface ActionV2EvaluationContract {

recordId:string;

successScore:number;

impactScore:number;

feedback:string;

}

