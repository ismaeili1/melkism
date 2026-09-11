export interface AutonomousCognitiveSelfModelingAdvancedIntegrationContract {

id:string;

cognitiveSelfAwarenessAdvancedIntegrationId:string;

cognitiveSelfModelingAdvancedIntegrationId:string;

selfModelingModels:Array<{
model:string;
description:string;
confidence:number;
}>;

selfModelingProcesses:Array<{
process:string;
score:number;
}>;

internalSelfModels:Array<{
model:string;
value:number;
}>;

identityModels:Array<{
identity:string;
score:number;
}>;

capabilityModels:Array<{
capability:string;
score:number;
}>;

knowledgeModels:Array<{
knowledge:string;
score:number;
}>;

cognitiveModels:Array<{
cognitive:string;
score:number;
}>;

metaModels:Array<{
meta:string;
score:number;
}>;

selfModelingInsights:Array<{
insight:string;
value:number;
}>;

selfModelingEvolutionRecords:Array<{
event:string;
growth:number;
}>;

selfModelingContext:Record<string,unknown>;

selfModelingState:"building"|"modeling"|"completed";

selfModelingVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
