export interface AutonomousCognitiveSelfAwarenessArchitectureContract {


id:string;


selfModelingIntelligenceId:string;


selfAwarenessArchitectureId:string;



selfAwarenessIdentityModels:Array<{

identity:string;

confidence:number;

}>;



internalStateAwarenessModels:Array<{

state:string;

accuracy:number;

}>;



cognitiveStateMonitoringModels:Array<{

monitor:string;

score:number;

}>;



capabilityAwarenessModels:Array<{

capability:string;

awareness:number;

}>;



limitationAwarenessModels:Array<{

limitation:string;

recognition:number;

}>;



cognitiveChangeDetectionModels:Array<{

change:string;

sensitivity:number;

}>;



selfStatusEvaluationModels:Array<{

status:string;

quality:number;

}>;



awarenessDecisionSupportModels:Array<{

support:string;

value:number;

}>;



awarenessEvolutionTrackingModels:Array<{

cycle:string;

growth:number;

}>;



selfAwarenessContinuityModels:Array<{

continuity:string;

score:number;

}>;



awarenessInsights:Array<{

insight:string;

value:number;

}>;



awarenessRegistryModels:Array<{

awareness:string;

status:string;

}>;



awarenessState:

"initializing"|"aware"|"completed";



awarenessVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
