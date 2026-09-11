export interface AutonomousCognitiveSelfUnderstandingAdvancedIntegrationContract {

id:string;

cognitiveSelfKnowledgeAdvancedIntegrationId:string;

cognitiveSelfUnderstandingAdvancedIntegrationId:string;

selfUnderstandingModels:Array<{
model:string;
description:string;
confidence:number;
}>;

understandingProcesses:Array<{
process:string;
score:number;
}>;

identityUnderstandingModels:Array<{
identity:string;
value:number;
}>;

capabilityUnderstandingModels:Array<{
capability:string;
score:number;
}>;

knowledgeUnderstandingModels:Array<{
knowledge:string;
score:number;
}>;

contextUnderstandingModels:Array<{
context:string;
score:number;
}>;

behaviorUnderstandingModels:Array<{
behavior:string;
score:number;
}>;

reasoningUnderstandingModels:Array<{
reasoning:string;
score:number;
}>;

understandingInsights:Array<{
insight:string;
value:number;
}>;

understandingEvolutionRecords:Array<{
event:string;
growth:number;
}>;

understandingContext:Record<string,unknown>;

understandingState:"building"|"understanding"|"completed";

understandingVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
