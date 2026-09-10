export interface CollectiveIntelligenceDecisionNetworkContract {


id:string;


multiAgentLayerId:string;


networkId:string;



collectiveDecisionModels:Array<{

decision:string;

quality:number;

}>;



knowledgeAggregationModels:Array<{

knowledge:string;

value:number;

}>;



conflictResolutionModels:Array<{

conflict:string;

resolution:number;

}>;



consensusOptimizationModels:Array<{

consensus:string;

agreement:number;

}>;



groupLearningModels:Array<{

learning:string;

impact:number;

}>;



collectiveMemoryModels:Array<{

memory:string;

capacity:number;

}>;



decisionEvaluationModels:Array<{

evaluation:string;

score:number;

}>;



collectiveEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



networkInsights:Array<{

insight:string;

value:number;

}>;



networkState:

"initializing"|"operating"|"completed";



networkVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
