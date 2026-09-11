export interface CollectiveIntelligenceEngineContract {

id:string;

collaborationId:string;

collectiveIntelligenceId:string;


agents:Array<{

id:string;

role:string;

}>;


sharedKnowledgeModels:Array<{

knowledge:string;

score:number;

}>;


collectiveMemoryModels:Array<{

memory:string;

score:number;

}>;


groupReasoningModels:Array<{

reasoning:string;

score:number;

}>;


collectiveDecisionModels:Array<{

decision:string;

score:number;

}>;


consensusIntelligenceModels:Array<{

consensus:string;

score:number;

}>;


emergentIntelligenceModels:Array<{

emergence:string;

score:number;

}>;


collectiveLearningModels:Array<{

learning:string;

score:number;

}>;


optimizationModels:Array<{

optimization:string;

score:number;

}>;


aggregationModels:Array<{

aggregation:string;

score:number;

}>;


collectiveInsights:Array<{

insight:string;

value:number;

}>;


evolutionCycles:Array<{

cycle:string;

growth:number;

}>;


state:

"initializing"|"learning"|"completed";


version:number;

confidence:number;


status:

"created"|"active"|"completed";


createdAt:Date;

}
