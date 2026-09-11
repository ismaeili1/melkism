export interface AutonomousCognitiveDecisionIntelligenceContract {


id:string;


governanceIntelligenceId:string;


decisionIntelligenceId:string;



decisionIntelligenceIdentityModels:Array<{

identity:string;

confidence:number;

}>;



cognitiveDecisionModels:Array<{

decision:string;

quality:number;

}>;



decisionContextAnalysisModels:Array<{

context:string;

accuracy:number;

}>;



alternativeGenerationEngineModels:Array<{

alternative:string;

coverage:number;

}>;



decisionEvaluationModels:Array<{

evaluation:string;

score:number;

}>;



confidenceAssessmentModels:Array<{

assessment:string;

confidence:number;

}>;



outcomePredictionModels:Array<{

outcome:string;

prediction:number;

}>;



decisionOptimizationEngineModels:Array<{

optimization:string;

effectiveness:number;

}>;



adaptiveDecisionStrategyModels:Array<{

strategy:string;

adaptability:number;

}>;



decisionLearningFeedbackModels:Array<{

feedback:string;

learning:number;

}>;



decisionEvolutionTrackingModels:Array<{

cycle:string;

growth:number;

}>;



decisionContinuityModels:Array<{

continuity:string;

score:number;

}>;



decisionInsights:Array<{

insight:string;

value:number;

}>;



decisionRegistryModels:Array<{

decision:string;

status:string;

}>;



decisionState:

"initializing"|"reasoning"|"completed";



decisionVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
