export interface AutonomousIntelligenceKernelContract {


id:string;



operatingSystemId:string;



kernelId:string;



cognitiveRuntimeCoreModels:Array<{

runtime:string;

state:string;

}>;



internalEventBusModels:Array<{

event:string;

status:string;

}>;



cognitiveProcessModels:Array<{

process:string;

state:string;

}>;



autonomousTaskModels:Array<{

task:string;

status:string;

}>;



persistentStateModels:Array<{

state:string;

value:number;

}>;



consciousOperationModels:Array<{

operation:string;

status:string;

}>;



selfMonitoringModels:Array<{

metric:string;

value:number;

}>;



executionFeedbackModels:Array<{

feedback:string;

impact:number;

}>;



runtimeOptimizationModels:Array<{

optimization:string;

score:number;

}>;



kernelInsights:Array<{

insight:string;

value:number;

}>;



kernelEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



kernelState:

"initializing"|"running"|"completed";



kernelVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
