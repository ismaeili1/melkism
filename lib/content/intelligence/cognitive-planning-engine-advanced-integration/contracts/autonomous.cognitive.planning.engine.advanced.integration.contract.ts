export interface AutonomousCognitivePlanningEngineAdvancedIntegrationContract {


id:string;



cognitiveDecisionIntelligenceAdvancedIntegrationId:string;



cognitivePlanningEngineAdvancedIntegrationId:string;



planningModels:Array<{

model:string;

description:string;

confidence:number;

}>;



planningProcesses:Array<{

process:string;

score:number;

}>;



goalPlanningModels:Array<{

goal:string;

score:number;

}>;



strategyPlanningModels:Array<{

strategy:string;

score:number;

}>;



taskDecompositionModels:Array<{

task:string;

score:number;

}>;



scenarioPlanningModels:Array<{

scenario:string;

score:number;

}>;



resourcePlanningModels:Array<{

resource:string;

score:number;

}>;



timelinePlanningModels:Array<{

timeline:string;

score:number;

}>;



adaptivePlanningModels:Array<{

adaptation:string;

score:number;

}>;



metaPlanningModels:Array<{

meta:string;

score:number;

}>;



planningInsights:Array<{

insight:string;

value:number;

}>;



planningEvolutionCycles:Array<{

cycle:string;

growth:number;

}>;



planningContext:Record<string,unknown>;



planningState:

"building"|"planning"|"completed";



planningVersion:number;



confidence:number;



status:

"created"|"processing"|"completed";



createdAt:Date;

}
