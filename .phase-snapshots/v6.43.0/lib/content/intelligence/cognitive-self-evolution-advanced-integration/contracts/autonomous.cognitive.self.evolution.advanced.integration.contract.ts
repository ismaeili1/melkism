export interface AutonomousCognitiveSelfEvolutionAdvancedIntegrationContract {

id:string;

cognitiveSelfImprovementAdvancedIntegrationId:string;

cognitiveSelfEvolutionAdvancedIntegrationId:string;

selfEvolutionModels:Array<{
model:string;
description:string;
confidence:number;
}>;

evolutionProcesses:Array<{
process:string;
score:number;
}>;

capabilityEvolutionModels:Array<{
capability:string;
score:number;
}>;

performanceEvolutionModels:Array<{
performance:string;
score:number;
}>;

qualityEvolutionModels:Array<{
quality:string;
score:number;
}>;

learningEvolutionModels:Array<{
learning:string;
score:number;
}>;

knowledgeEvolutionModels:Array<{
knowledge:string;
score:number;
}>;

reasoningEvolutionModels:Array<{
reasoning:string;
score:number;
}>;

behaviorEvolutionModels:Array<{
behavior:string;
score:number;
}>;

metaEvolutionModels:Array<{
meta:string;
score:number;
}>;

evolutionInsights:Array<{
insight:string;
value:number;
}>;

evolutionHistoryRecords:Array<{
event:string;
growth:number;
}>;

evolutionContext:Record<string,unknown>;

evolutionState:"building"|"evolving"|"completed";

evolutionVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
