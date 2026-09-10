export interface AutonomousMetaCognitionIntelligenceContract {


id:string;



cognitiveEvolutionEngineId:string;



metaCognitionId:string;



intelligenceSelfAssessmentModels:Array<{

assessment:string;

score:number;

}>;



reasoningEvaluationModels:Array<{

reasoning:string;

quality:number;

}>;



decisionEvaluationModels:Array<{

decision:string;

quality:number;

}>;



cognitiveMonitoringModels:Array<{

metric:string;

value:number;

}>;



selfReflectionModels:Array<{

reflection:string;

insight:number;

}>;



optimizationModels:Array<{

optimization:string;

score:number;

}>;



feedbackModels:Array<{

feedback:string;

impact:number;

}>;



improvementPlanningModels:Array<{

plan:string;

priority:number;

}>;



metaInsights:Array<{

insight:string;

value:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



metaState:

"initializing"|"reflecting"|"completed";



metaVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
