
export interface GovernanceSelfControlV2InputContract {

id:string;

controlId:string;

policies:string[];

rules:string[];

decisions:string[];

}



export interface GovernanceSelfControlV2RecordContract {

id:string;

controlId:string;

stabilityScore:number;

selfControlScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceSelfControlV2EvaluationContract {

recordId:string;

deviationScore:number;

correctionScore:number;

feedback:string;

}

