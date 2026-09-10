
export interface GovernanceOptimizationEvolutionLearningV2InputContract {

id:string;

learningId:string;

evolutionStates:string[];

evolutionPatterns:string[];

feedbackSignals:string[];

}



export interface GovernanceOptimizationEvolutionLearningV2RecordContract {

id:string;

learningScore:number;

evolutionKnowledge:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionLearningV2EvaluationContract {

recordId:string;

knowledgeGain:number;

learningGain:number;

feedback:string;

}

