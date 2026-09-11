export interface AutonomousCognitiveSelfAdaptationAdvancedIntegrationContract {

id:string;

cognitiveSelfOptimizationAdvancedIntegrationId:string;

cognitiveSelfAdaptationAdvancedIntegrationId:string;

selfAdaptationModels:Array<{
model:string;
description:string;
confidence:number;
}>;

adaptationProcesses:Array<{
process:string;
score:number;
}>;

environmentAdaptationModels:Array<{
environment:string;
score:number;
}>;

contextAdaptationModels:Array<{
context:string;
score:number;
}>;

resourceAdaptationModels:Array<{
resource:string;
score:number;
}>;

performanceAdaptationModels:Array<{
performance:string;
score:number;
}>;

learningAdaptationModels:Array<{
learning:string;
score:number;
}>;

knowledgeAdaptationModels:Array<{
knowledge:string;
score:number;
}>;

reasoningAdaptationModels:Array<{
reasoning:string;
score:number;
}>;

behaviorAdaptationModels:Array<{
behavior:string;
score:number;
}>;

metaAdaptationModels:Array<{
meta:string;
score:number;
}>;

adaptationInsights:Array<{
insight:string;
value:number;
}>;

adaptationHistoryRecords:Array<{
event:string;
growth:number;
}>;

adaptationContext:Record<string,unknown>;

adaptationState:"building"|"adapting"|"completed";

adaptationVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
