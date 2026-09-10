export interface AutonomousCognitiveRegulationControlIntelligenceContract {


id:string;


selfManagementIntelligenceId:string;


regulationControlIntelligenceId:string;



regulationIdentityModels:Array<{

identity:string;

confidence:number;

}>;



cognitiveRegulationModels:Array<{

regulation:string;

effectiveness:number;

}>;



dynamicStateBalancingModels:Array<{

state:string;

balance:number;

}>;



controlLoopManagementModels:Array<{

loop:string;

stability:number;

}>;



adaptiveResponseControlModels:Array<{

response:string;

adaptability:number;

}>;



cognitiveStabilityRegulationModels:Array<{

stability:string;

score:number;

}>;



resourceOptimizationControlModels:Array<{

resource:string;

optimization:number;

}>;



errorCorrectionRegulationModels:Array<{

error:string;

correction:number;

}>;



adaptiveRegulationStrategyModels:Array<{

strategy:string;

adaptability:number;

}>;



regulationEvolutionTrackingModels:Array<{

cycle:string;

growth:number;

}>;



controlContinuityModels:Array<{

continuity:string;

score:number;

}>;



regulationInsights:Array<{

insight:string;

value:number;

}>;



regulationRegistryModels:Array<{

regulation:string;

status:string;

}>;



regulationState:

"initializing"|"controlling"|"completed";



regulationVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
