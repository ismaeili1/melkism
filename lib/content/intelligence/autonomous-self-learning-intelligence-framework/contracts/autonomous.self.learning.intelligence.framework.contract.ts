export interface AutonomousSelfLearningIntelligenceFrameworkContract {


id:string;



planningIntelligenceId:string;



learningFrameworkId:string;



experienceMemoryModels:Array<{

experience:string;

value:number;

}>;



learningEventModels:Array<{

event:string;

score:number;

}>;



patternRecognitionModels:Array<{

pattern:string;

confidence:number;

}>;



knowledgeUpdateModels:Array<{

knowledge:string;

impact:number;

}>;



performanceLearningModels:Array<{

metric:string;

improvement:number;

}>;



adaptationModels:Array<{

adaptation:string;

score:number;

}>;



behaviorImprovementModels:Array<{

behavior:string;

improvement:number;

}>;



feedbackProcessingModels:Array<{

feedback:string;

score:number;

}>;



optimizationModels:Array<{

optimization:string;

score:number;

}>;



learningInsights:Array<{

insight:string;

value:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



learningState:

"initializing"|"learning"|"completed";



learningVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
