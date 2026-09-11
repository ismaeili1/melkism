export interface AutonomousCognitiveSelfAwarenessAdvancedIntegrationContract {

id:string;

cognitiveSelfIntegrationAdvancedIntegrationId:string;

cognitiveSelfAwarenessAdvancedIntegrationId:string;

selfAwarenessModels:Array<{
model:string;
description:string;
confidence:number;
}>;

awarenessProcesses:Array<{
process:string;
score:number;
}>;

identityAwarenessModels:Array<{
identity:string;
score:number;
}>;

knowledgeAwarenessModels:Array<{
knowledge:string;
score:number;
}>;

capabilityAwarenessModels:Array<{
capability:string;
score:number;
}>;

reasoningAwarenessModels:Array<{
reasoning:string;
score:number;
}>;

behaviorAwarenessModels:Array<{
behavior:string;
score:number;
}>;

adaptationAwarenessModels:Array<{
adaptation:string;
score:number;
}>;

metaAwarenessModels:Array<{
meta:string;
score:number;
}>;

awarenessInsights:Array<{
insight:string;
value:number;
}>;

awarenessEvolutionRecords:Array<{
event:string;
growth:number;
}>;

awarenessContext:Record<string,unknown>;

awarenessState:"building"|"aware"|"completed";

awarenessVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
