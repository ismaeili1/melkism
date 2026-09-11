export interface MetaIntelligenceReflectionContract {

id:string;

selfOptimizationId:string;

reflectionId:string;

selfAnalysisModels:Array<{
analysis:string;
score:number;
}>;

decisionReflectionModels:Array<{
decision:string;
quality:number;
}>;

knowledgeReflectionModels:Array<{
knowledge:string;
quality:number;
}>;

behaviorReflectionModels:Array<{
behavior:string;
quality:number;
}>;

strategyReflectionModels:Array<{
strategy:string;
quality:number;
}>;

cognitiveStateAnalysisModels:Array<{
state:string;
level:number;
}>;

performanceReflectionModels:Array<{
performance:string;
score:number;
}>;

learningReflectionModels:Array<{
learning:string;
impact:number;
}>;

metaInsights:Array<{
insight:string;
value:number;
}>;

reflectionEvolutionTracking:Array<{
cycle:string;
growth:number;
}>;

reflectionState:
"initializing"|"reflecting"|"completed";

reflectionVersion:number;

confidence:number;

status:
"created"|"active"|"completed";

createdAt:Date;
}
