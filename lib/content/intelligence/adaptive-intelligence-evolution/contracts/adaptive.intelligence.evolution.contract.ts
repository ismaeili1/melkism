export interface AdaptiveIntelligenceEvolutionContract {


id:string;


knowledgeSynthesisId:string;


evolutionId:string;



capabilityEvolutionModels:Array<{

capability:string;

growth:number;

}>;



strategyEvolutionModels:Array<{

strategy:string;

improvement:number;

}>;



modelImprovementModels:Array<{

model:string;

quality:number;

}>;



behaviorOptimizationModels:Array<{

behavior:string;

optimization:number;

}>;



selfAdaptationModels:Array<{

adaptation:string;

level:number;

}>;



evolutionFeedbackModels:Array<{

feedback:string;

impact:number;

}>;



performanceGrowthModels:Array<{

performance:string;

growth:number;

}>;



evolutionEvaluationModels:Array<{

evaluation:string;

score:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



evolutionInsights:Array<{

insight:string;

value:number;

}>;



evolutionState:

"initializing"|"adapting"|"completed";



evolutionVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
