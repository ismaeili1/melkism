export interface AutonomousCognitiveSelfImprovementIntelligenceContract {

id:string;

evolutionIntelligenceId:string;

selfImprovementIntelligenceId:string;


selfImprovementIdentityModels:Array<{
identity:string;
confidence:number;
}>;


performanceEvaluationModels:Array<{
performance:string;
score:number;
}>;


weaknessDetectionEngineModels:Array<{
weakness:string;
severity:number;
}>;


improvementRecommendationEngineModels:Array<{
recommendation:string;
value:number;
}>;


capabilityEnhancementModels:Array<{
capability:string;
enhancement:number;
}>;


optimizationPlanningModels:Array<{
plan:string;
effectiveness:number;
}>;


selfCorrectionModels:Array<{
correction:string;
accuracy:number;
}>;


improvementExecutionManagementModels:Array<{
execution:string;
success:number;
}>;


improvementFeedbackLoopModels:Array<{
feedback:string;
learning:number;
}>;


improvementEvolutionTrackingModels:Array<{
cycle:string;
growth:number;
}>;


continuousEnhancementModels:Array<{
enhancement:string;
progress:number;
}>;


improvementContinuityModels:Array<{
continuity:string;
score:number;
}>;


improvementInsights:Array<{
insight:string;
value:number;
}>;


improvementRegistryModels:Array<{
improvement:string;
status:string;
}>;


improvementState:

"initializing"|"improving"|"completed";


improvementVersion:number;

confidence:number;


status:

"created"|"active"|"completed";


createdAt:Date;

}
