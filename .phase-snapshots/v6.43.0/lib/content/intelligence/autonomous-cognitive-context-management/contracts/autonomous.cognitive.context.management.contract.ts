export interface AutonomousCognitiveContextManagementContract {


id:string;


memoryContinuityId:string;


contextManagementId:string;



contextIdentityModels:Array<{

context:string;

identity:number;

}>;



contextRetrievalModels:Array<{

query:string;

relevance:number;

}>;



contextIntegrationModels:Array<{

context:string;

integration:number;

}>;



contextPrioritizationModels:Array<{

context:string;

priority:number;

}>;



activeContextStateModels:Array<{

state:string;

level:number;

}>;



contextRelationshipModels:Array<{

source:string;

target:string;

strength:number;

}>;



contextEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



contextContinuityModels:Array<{

continuity:string;

score:number;

}>;



contextInsights:Array<{

insight:string;

value:number;

}>;



contextState:

"initializing"|"active"|"completed";



contextVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
