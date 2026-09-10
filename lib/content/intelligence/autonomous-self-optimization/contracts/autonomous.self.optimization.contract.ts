export interface AutonomousSelfOptimizationContract {


id:string;


adaptiveEvolutionId:string;


optimizationId:string;



performanceOptimizationModels:Array<{

performance:string;

score:number;

}>;



resourceOptimizationModels:Array<{

resource:string;

efficiency:number;

}>;



decisionOptimizationModels:Array<{

decision:string;

quality:number;

}>;



runtimeOptimizationModels:Array<{

runtime:string;

improvement:number;

}>;



learningOptimizationModels:Array<{

learning:string;

optimization:number;

}>;



architectureOptimizationModels:Array<{

architecture:string;

enhancement:number;

}>;



optimizationFeedbackModels:Array<{

feedback:string;

impact:number;

}>;



optimizationEvaluationModels:Array<{

evaluation:string;

score:number;

}>;



optimizationEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



optimizationInsights:Array<{

insight:string;

value:number;

}>;



optimizationState:

"initializing"|"optimizing"|"completed";



optimizationVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
