export interface AutonomousCognitiveMetaIntelligenceContract {


id:string;


evolutionIntelligenceId:string;


metaIntelligenceId:string;



metaIntelligenceIdentityModels:Array<{

identity:string;

confidence:number;

}>;



selfCognitiveModelModels:Array<{

model:string;

accuracy:number;

}>;



cognitiveArchitectureModels:Array<{

architecture:string;

stability:number;

}>;



internalStateRepresentationModels:Array<{

state:string;

quality:number;

}>;



cognitivePerformanceMonitoringModels:Array<{

performance:string;

score:number;

}>;



metaReasoningModels:Array<{

reasoning:string;

capability:number;

}>;



cognitiveOptimizationStrategyModels:Array<{

strategy:string;

effectiveness:number;

}>;



selfEvaluationEngineModels:Array<{

evaluation:string;

result:number;

}>;



metaLearningTrackingModels:Array<{

cycle:string;

growth:number;

}>;



cognitiveContinuityModels:Array<{

continuity:string;

score:number;

}>;



metaInsights:Array<{

insight:string;

value:number;

}>;



metaRegistryModels:Array<{

intelligence:string;

status:string;

}>;



metaState:

"initializing"|"modeling"|"completed";



metaVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
