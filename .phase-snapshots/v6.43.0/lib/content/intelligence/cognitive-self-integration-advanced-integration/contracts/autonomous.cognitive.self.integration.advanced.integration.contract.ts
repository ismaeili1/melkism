export interface AutonomousCognitiveSelfIntegrationAdvancedIntegrationContract {

id:string;

cognitiveSelfRegulationAdvancedIntegrationId:string;

cognitiveSelfIntegrationAdvancedIntegrationId:string;

selfIntegrationModels:Array<{
model:string;
description:string;
confidence:number;
}>;

integrationProcesses:Array<{
process:string;
score:number;
}>;

identityIntegrationModels:Array<{
identity:string;
score:number;
}>;

knowledgeIntegrationModels:Array<{
knowledge:string;
score:number;
}>;

capabilityIntegrationModels:Array<{
capability:string;
score:number;
}>;

reasoningIntegrationModels:Array<{
reasoning:string;
score:number;
}>;

behaviorIntegrationModels:Array<{
behavior:string;
score:number;
}>;

adaptationIntegrationModels:Array<{
adaptation:string;
score:number;
}>;

metaIntegrationModels:Array<{
meta:string;
score:number;
}>;

integrationInsights:Array<{
insight:string;
value:number;
}>;

integrationEvolutionRecords:Array<{
event:string;
growth:number;
}>;

integrationContext:Record<string,unknown>;

integrationState:"building"|"integrating"|"completed";

integrationVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
