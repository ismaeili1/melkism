
export interface GovernanceAdaptiveRegulationV2InputContract {

id:string;

regulationId:string;

context:string[];

policies:string[];

rules:string[];

feedback:string[];

}



export interface GovernanceAdaptiveRegulationV2RecordContract {

id:string;

regulationId:string;

adaptationScore:number;

stabilityScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceAdaptiveRegulationV2EvaluationContract {

recordId:string;

changeScore:number;

adaptationScore:number;

feedback:string;

}

