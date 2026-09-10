
export interface GovernanceSelfRegulationV2InputContract {

id:string;

regulationId:string;

policies:string[];

rules:string[];

controls:string[];

}



export interface GovernanceSelfRegulationV2RecordContract {

id:string;

regulationId:string;

stabilityScore:number;

regulationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceSelfRegulationV2EvaluationContract {

recordId:string;

deviationScore:number;

adjustmentScore:number;

feedback:string;

}

