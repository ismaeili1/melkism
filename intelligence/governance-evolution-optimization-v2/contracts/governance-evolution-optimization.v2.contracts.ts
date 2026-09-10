
export interface GovernanceEvolutionOptimizationV2InputContract {

id:string;

optimizationId:string;

evolutionState:string[];

performanceData:string[];

feedback:string[];

}



export interface GovernanceEvolutionOptimizationV2RecordContract {

id:string;

optimizationId:string;

optimizationScore:number;

performanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceEvolutionOptimizationV2EvaluationContract {

recordId:string;

efficiencyScore:number;

improvementScore:number;

feedback:string;

}

