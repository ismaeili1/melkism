export interface AutonomousCognitiveLearningFeedbackIntelligenceContract {


id:string;


actionReasoningId:string;


learningFeedbackIntelligenceId:string;



learningIdentityModels:Array<{

learning:string;

identity:number;

}>;



feedbackCollectionModels:Array<{

feedback:string;

quality:number;

}>;



experienceAnalysisModels:Array<{

experience:string;

value:number;

}>;



patternRecognitionModels:Array<{

pattern:string;

confidence:number;

}>;



knowledgeAdjustmentModels:Array<{

knowledge:string;

improvement:number;

}>;



behaviorAdaptationModels:Array<{

behavior:string;

adaptation:number;

}>;



performanceEvaluationModels:Array<{

performance:string;

score:number;

}>;



learningEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



learningContinuityModels:Array<{

continuity:string;

score:number;

}>;



learningInsights:Array<{

insight:string;

value:number;

}>;



improvementRegistryModels:Array<{

improvement:string;

status:string;

}>;



learningState:

"initializing"|"learning"|"completed";



learningVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
