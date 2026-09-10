export interface UnifiedIntelligenceRuntimeCoreContract {


id:string;



platformId:string;



runtimeId:string;



registeredModules:Array<{

module:string;

version:string;

status:string;

}>;



executionContexts:Array<{

context:string;

state:string;

}>;



communicationChannels:Array<{

channel:string;

status:string;

}>;



runtimeEvents:Array<{

event:string;

value:number;

}>;



moduleLifecycle:Array<{

module:string;

state:string;

}>;



runtimeInsights:Array<{

insight:string;

value:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



runtimeState:

"initializing"|"running"|"completed";



runtimeVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
