export interface AutonomousIntelligenceExecutionFrameworkContract {


id:string;



runtimeCoreId:string;



executionFrameworkId:string;



tasks:Array<{

task:string;

status:string;

}>;



actions:Array<{

action:string;

status:string;

}>;



decisions:Array<{

decision:string;

result:string;

}>;



pipelines:Array<{

pipeline:string;

state:string;

}>;



feedbackModels:Array<{

feedback:string;

score:number;

}>;



monitoringModels:Array<{

metric:string;

value:number;

}>;



recoveryModels:Array<{

recovery:string;

status:string;

}>;



optimizationModels:Array<{

optimization:string;

score:number;

}>;



executionInsights:Array<{

insight:string;

value:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



executionState:

"initializing"|"executing"|"completed";



executionVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
