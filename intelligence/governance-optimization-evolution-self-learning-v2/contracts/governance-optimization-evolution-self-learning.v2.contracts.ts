
export interface GovernanceOptimizationEvolutionSelfLearningV2InputContract {

id:string;

selfLearningId:string;

evolutionKnowledge:string[];

learningPatterns:string[];

adaptationSignals:string[];

}



export interface GovernanceOptimizationEvolutionSelfLearningV2RecordContract {

id:string;

selfLearningScore:number;

adaptationScore:number;

evolutionMemory:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionSelfLearningV2EvaluationContract {

recordId:string;

learningGain:number;

adaptationGain:number;

feedback:string;

}

