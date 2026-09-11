export interface AutonomousGoalStrategicPlanningIntelligenceContract {


id:string;



decisionIntelligenceId:string;



goalPlanningId:string;



goalDiscoveryModels:Array<{

goal:string;

score:number;

}>;



goalClassificationModels:Array<{

classification:string;

type:string;

}>;



goalPriorityModels:Array<{

goal:string;

priority:number;

}>;



strategyModels:Array<{

strategy:string;

score:number;

}>;



planningModels:Array<{

plan:string;

state:string;

}>;



resourceAllocationModels:Array<{

resource:string;

allocation:number;

}>;



milestoneModels:Array<{

milestone:string;

progress:number;

}>;



progressTrackingModels:Array<{

metric:string;

value:number;

}>;



strategyEvaluationModels:Array<{

strategy:string;

score:number;

}>;



optimizationModels:Array<{

optimization:string;

score:number;

}>;



feedbackModels:Array<{

feedback:string;

score:number;

}>;



strategicInsights:Array<{

insight:string;

value:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



planningState:

"initializing"|"planning"|"completed";



planningVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
