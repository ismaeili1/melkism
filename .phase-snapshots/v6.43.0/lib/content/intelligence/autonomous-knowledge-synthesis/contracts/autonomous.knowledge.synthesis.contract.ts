export interface AutonomousKnowledgeSynthesisContract {


id:string;


collectiveNetworkId:string;


synthesisId:string;



knowledgeFusionModels:Array<{

fusion:string;

value:number;

}>;



patternDiscoveryModels:Array<{

pattern:string;

confidence:number;

}>;



insightGenerationModels:Array<{

insight:string;

quality:number;

}>;



semanticLearningModels:Array<{

learning:string;

accuracy:number;

}>;



knowledgeValidationModels:Array<{

validation:string;

score:number;

}>;



knowledgeEvolutionModels:Array<{

evolution:string;

growth:number;

}>;



knowledgeMemoryModels:Array<{

memory:string;

capacity:number;

}>;



synthesisEvaluationModels:Array<{

evaluation:string;

score:number;

}>;



knowledgeEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



synthesisInsights:Array<{

insight:string;

value:number;

}>;



synthesisState:

"initializing"|"processing"|"completed";



synthesisVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
