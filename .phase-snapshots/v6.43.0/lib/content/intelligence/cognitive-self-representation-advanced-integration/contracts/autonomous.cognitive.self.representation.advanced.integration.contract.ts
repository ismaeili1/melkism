export interface AutonomousCognitiveSelfRepresentationAdvancedIntegrationContract {

id:string;

cognitiveSelfModelingAdvancedIntegrationId:string;

cognitiveSelfRepresentationAdvancedIntegrationId:string;

selfRepresentationModels:Array<{
model:string;
description:string;
confidence:number;
}>;

representationProcesses:Array<{
process:string;
score:number;
}>;

internalRepresentationModels:Array<{
representation:string;
value:number;
}>;

identityRepresentationModels:Array<{
identity:string;
score:number;
}>;

capabilityRepresentationModels:Array<{
capability:string;
score:number;
}>;

knowledgeRepresentationModels:Array<{
knowledge:string;
score:number;
}>;

cognitiveRepresentationModels:Array<{
cognitive:string;
score:number;
}>;

metaRepresentationModels:Array<{
meta:string;
score:number;
}>;

representationInsights:Array<{
insight:string;
value:number;
}>;

representationEvolutionRecords:Array<{
event:string;
growth:number;
}>;

representationContext:Record<string,unknown>;

representationState:"building"|"representing"|"completed";

representationVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
