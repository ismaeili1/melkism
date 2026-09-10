
export interface GovernanceOptimizationEvolutionIntelligenceV2InputContract {

id:string;

evolutionIntelligenceId:string;

evolutionPatterns:string[];

optimizationHistory:string[];

knowledgeSignals:string[];

}



export interface GovernanceOptimizationEvolutionIntelligenceV2RecordContract {

id:string;

intelligenceScore:number;

evolutionMaturity:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceOptimizationEvolutionIntelligenceV2EvaluationContract {

recordId:string;

evolutionGain:number;

knowledgeGain:number;

feedback:string;

}

