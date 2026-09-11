export interface AutonomousCognitiveOperatingSystemContract {


id:string;



systemName:string;



reasoningEngineId:string;



decisionIntelligenceId:string;



planningEngineId:string;



executionEngineId:string;



feedbackIntelligenceId:string;



selfImprovementId:string;



evolutionIntelligenceId:string;



registeredModules:Array<{

module:string;

version:string;

status:string;

}>;



cognitivePipelines:Array<{

pipeline:string;

state:string;

}>;



systemInsights:Array<{

insight:string;

value:number;

}>;



evolutionCycles:Array<{

cycle:string;

growth:number;

}>;



systemState:

"initializing"|"running"|"completed";



systemVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
