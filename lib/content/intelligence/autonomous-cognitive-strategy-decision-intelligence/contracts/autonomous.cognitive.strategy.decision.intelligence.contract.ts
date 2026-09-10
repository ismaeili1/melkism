export interface AutonomousCognitiveStrategyDecisionIntelligenceContract {


id:string;


planningIntelligenceId:string;


strategyDecisionIntelligenceId:string;



strategyIdentityModels:Array<{

strategy:string;

identity:number;

}>;



strategyEvaluationModels:Array<{

strategy:string;

score:number;

}>;



optionComparisonModels:Array<{

option:string;

value:number;

}>;



decisionCriteriaModels:Array<{

criterion:string;

weight:number;

}>;



decisionConfidenceModels:Array<{

decision:string;

confidence:number;

}>;



riskAssessmentModels:Array<{

risk:string;

level:number;

}>;



decisionStateModels:Array<{

state:string;

level:number;

}>;



decisionEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



decisionContinuityModels:Array<{

continuity:string;

score:number;

}>;



strategyInsights:Array<{

insight:string;

value:number;

}>;



decisionRegistryModels:Array<{

decision:string;

status:string;

}>;



decisionState:

"initializing"|"evaluating"|"completed";



decisionVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
