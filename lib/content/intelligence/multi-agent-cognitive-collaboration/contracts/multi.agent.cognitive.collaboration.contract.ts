export interface MultiAgentCognitiveCollaborationContract {


id:string;



agentArchitectureId:string;



collaborationId:string;



agents:Array<{

id:string;

role:string;

status:string;

}>;



communicationNetwork:Array<{

channel:string;

status:string;

}>;



knowledgeExchangeModels:Array<{

knowledge:string;

score:number;

}>;



collectiveReasoningModels:Array<{

reasoning:string;

score:number;

}>;



groupDecisionModels:Array<{

decision:string;

score:number;

}>;



consensusModels:Array<{

consensus:string;

score:number;

}>;



negotiationModels:Array<{

negotiation:string;

score:number;

}>;



taskDistributionModels:Array<{

task:string;

agent:string;

}>;



optimizationModels:Array<{

optimization:string;

score:number;

}>;



collectiveIntelligenceMetrics:Array<{

metric:string;

value:number;

}>;



collaborationInsights:Array<{

insight:string;

value:number;

}>;



collaborationEvolutionCycles:Array<{

cycle:string;

growth:number;

}>;



collaborationState:

"initializing"|"collaborating"|"completed";



collaborationVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
