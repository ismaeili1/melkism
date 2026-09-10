export interface AutonomousCognitivePlanningIntelligenceContract {


id:string;


goalIntentManagementId:string;


planningIntelligenceId:string;



planningIdentityModels:Array<{

planning:string;

identity:number;

}>;



intentPlanMappingModels:Array<{

intent:string;

plan:string;

confidence:number;

}>;



strategyGenerationModels:Array<{

strategy:string;

quality:number;

}>;



planningPriorityModels:Array<{

plan:string;

priority:number;

}>;



planStateModels:Array<{

state:string;

level:number;

}>;



actionSequenceModels:Array<{

action:string;

order:number;

}>;



dependencyMappingModels:Array<{

source:string;

target:string;

strength:number;

}>;



planEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



planContinuityModels:Array<{

continuity:string;

score:number;

}>;



planningInsights:Array<{

insight:string;

value:number;

}>;



autonomousPlanRegistryModels:Array<{

plan:string;

status:string;

}>;



planningState:

"initializing"|"processing"|"completed";



planningVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
