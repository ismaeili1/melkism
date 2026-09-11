export interface AutonomousCognitiveGoalIntentManagementContract {


id:string;


contextManagementId:string;


goalIntentManagementId:string;



goalIdentityModels:Array<{

goal:string;

identity:number;

}>;



intentRecognitionModels:Array<{

intent:string;

confidence:number;

}>;



goalClassificationModels:Array<{

category:string;

importance:number;

}>;



goalPriorityModels:Array<{

goal:string;

priority:number;

}>;



goalStateModels:Array<{

state:string;

level:number;

}>;



intentRelationshipModels:Array<{

source:string;

target:string;

strength:number;

}>;



goalEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



goalContinuityModels:Array<{

continuity:string;

score:number;

}>;



intentInsights:Array<{

insight:string;

value:number;

}>;



objectiveRegistryModels:Array<{

objective:string;

status:string;

}>;



goalState:

"initializing"|"active"|"completed";



goalVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
