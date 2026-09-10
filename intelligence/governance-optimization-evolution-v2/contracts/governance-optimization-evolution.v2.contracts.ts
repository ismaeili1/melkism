
export interface GovernanceOptimizationEvolutionV2InputContract {

id:string;

evolutionId:string;

improvementState:string[];

optimizationHistory:string[];

evolutionSignals:string[];

}



export interface GovernanceOptimizationEvolutionV2RecordContract {

id:string;

evolutionScore:number;

maturityScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionV2EvaluationContract {

recordId:string;

evolutionGain:number;

capabilityGain:number;

feedback:string;

}

