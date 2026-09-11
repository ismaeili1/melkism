export interface MultiAgentIntelligenceCollaborationContract {


id:string;


agentLayerId:string;


collaborationId:string;



agentRegistryModels:Array<{

agent:string;

role:string;

status:string;

}>;



communicationModels:Array<{

message:string;

status:string;

}>;



delegationModels:Array<{

task:string;

agent:string;

}>;



collaborationModels:Array<{

collaboration:string;

score:number;

}>;



consensusModels:Array<{

decision:string;

agreement:number;

}>;



coordinationModels:Array<{

coordination:string;

state:string;

}>;



collectiveIntelligenceModels:Array<{

intelligence:string;

level:number;

}>;



collaborationInsights:Array<{

insight:string;

value:number;

}>;



agentEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



collaborationState:

"initializing"|"coordinating"|"completed";



collaborationVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
