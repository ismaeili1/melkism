export interface AutonomousCognitiveSelfRegulationAdvancedIntegrationContract {

id:string;

cognitiveSelfAdaptationAdvancedIntegrationId:string;

cognitiveSelfRegulationAdvancedIntegrationId:string;

selfRegulationModels:Array<{
model:string;
description:string;
confidence:number;
}>;

regulationProcesses:Array<{
process:string;
score:number;
}>;

stabilityRegulationModels:Array<{
stability:string;
score:number;
}>;

resourceRegulationModels:Array<{
resource:string;
score:number;
}>;

performanceRegulationModels:Array<{
performance:string;
score:number;
}>;

learningRegulationModels:Array<{
learning:string;
score:number;
}>;

knowledgeRegulationModels:Array<{
knowledge:string;
score:number;
}>;

reasoningRegulationModels:Array<{
reasoning:string;
score:number;
}>;

behaviorRegulationModels:Array<{
behavior:string;
score:number;
}>;

metaRegulationModels:Array<{
meta:string;
score:number;
}>;

regulationInsights:Array<{
insight:string;
value:number;
}>;

regulationEvolutionRecords:Array<{
event:string;
growth:number;
}>;

regulationContext:Record<string,unknown>;

regulationState:"building"|"regulating"|"completed";

regulationVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
