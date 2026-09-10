export interface AutonomousCognitiveSelfImprovementEngineContract {


id:string;


learningFeedbackIntelligenceId:string;


selfImprovementEngineId:string;



selfImprovementIdentityModels:Array<{

identity:string;

confidence:number;

}>;



capabilityEvaluationModels:Array<{

capability:string;

score:number;

}>;



performanceAnalysisModels:Array<{

performance:string;

quality:number;

}>;



improvementDetectionModels:Array<{

improvement:string;

priority:number;

}>;



improvementGenerationModels:Array<{

generation:string;

value:number;

}>;



optimizationStrategyModels:Array<{

strategy:string;

effectiveness:number;

}>;



capabilityUpgradeTracking:Array<{

capability:string;

upgrade:number;

}>;



evolutionCycleManagementModels:Array<{

cycle:string;

status:string;

}>;



selfImprovementContinuityModels:Array<{

continuity:string;

score:number;

}>;



evolutionInsights:Array<{

insight:string;

value:number;

}>;



improvementRegistryModels:Array<{

improvement:string;

status:string;

}>;



improvementState:

"initializing"|"evolving"|"completed";



improvementVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
