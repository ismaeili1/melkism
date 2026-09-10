export interface AutonomousCognitiveDecisionIntelligenceAdvancedIntegrationContract {


id:string;



cognitiveReasoningEngineAdvancedIntegrationId:string;



cognitiveDecisionIntelligenceAdvancedIntegrationId:string;



decisionModels:Array<{

model:string;

description:string;

confidence:number;

}>;



decisionProcesses:Array<{

process:string;

score:number;

}>;



optionEvaluationModels:Array<{

option:string;

score:number;

}>;



riskAssessmentModels:Array<{

risk:string;

score:number;

}>;



outcomePredictionModels:Array<{

outcome:string;

score:number;

}>;



decisionOptimizationModels:Array<{

optimization:string;

score:number;

}>;



strategicDecisionModels:Array<{

strategy:string;

score:number;

}>;



adaptiveDecisionModels:Array<{

adaptation:string;

score:number;

}>;



metaDecisionModels:Array<{

meta:string;

score:number;

}>;



decisionInsights:Array<{

insight:string;

value:number;

}>;



decisionEvolutionCycles:Array<{

cycle:string;

growth:number;

}>;



decisionContext:Record<string,unknown>;



decisionState:

"building"|"deciding"|"completed";



decisionVersion:number;



confidence:number;



status:

"created"|"processing"|"completed";



createdAt:Date;

}
