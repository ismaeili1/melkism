
export interface GovernanceOptimizationEvolutionSelfImprovementV2InputContract {

id:string;

selfImprovementId:string;

selfLearningStates:string[];

evolutionPatterns:string[];

improvementSignals:string[];

}



export interface GovernanceOptimizationEvolutionSelfImprovementV2RecordContract {

id:string;

improvementScore:number;

enhancementScore:number;

adaptationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionSelfImprovementV2EvaluationContract {

recordId:string;

improvementGain:number;

capabilityGain:number;

feedback:string;

}

