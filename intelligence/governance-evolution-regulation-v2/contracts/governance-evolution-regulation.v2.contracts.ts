
export interface GovernanceEvolutionRegulationV2InputContract {

id:string;

evolutionId:string;

regulationState:string[];

history:string[];

feedback:string[];

}



export interface GovernanceEvolutionRegulationV2RecordContract {

id:string;

evolutionId:string;

evolutionScore:number;

regulationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceEvolutionRegulationV2EvaluationContract {

recordId:string;

growthScore:number;

adaptationScore:number;

feedback:string;

}

