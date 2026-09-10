export interface AutonomousIntelligenceOperatingSystemContract {


id:string;



coordinationLayerId:string;



operatingSystemId:string;



cognitiveKernelModels:Array<{

kernel:string;

state:string;

}>;



intelligenceSchedulerModels:Array<{

schedule:string;

priority:number;

}>;



decisionManagerModels:Array<{

decision:string;

status:string;

}>;



learningManagerModels:Array<{

learning:string;

status:string;

}>;



evolutionManagerModels:Array<{

evolution:string;

status:string;

}>;



memoryCoordinatorModels:Array<{

memory:string;

capacity:number;

}>;



capabilityControllerModels:Array<{

capability:string;

state:string;

}>;



cognitiveStateMonitorModels:Array<{

state:string;

level:number;

}>;



autonomousOperationModels:Array<{

operation:string;

status:string;

}>;



systemHealthModels:Array<{

metric:string;

value:number;

}>;



osInsights:Array<{

insight:string;

value:number;

}>;



operatingEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



osState:

"initializing"|"operating"|"completed";



osVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
