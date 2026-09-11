export interface AutonomousCognitiveSelfKnowledgeAdvancedIntegrationContract {

id:string;

cognitiveSelfLearningAdvancedIntegrationId:string;

cognitiveSelfKnowledgeAdvancedIntegrationId:string;

selfKnowledgeModels:Array<{
model:string;
description:string;
confidence:number;
}>;

knowledgeProcesses:Array<{
process:string;
score:number;
}>;

internalKnowledgeModels:Array<{
knowledge:string;
value:number;
}>;

experienceKnowledgeModels:Array<{
experience:string;
score:number;
}>;

contextKnowledgeModels:Array<{
context:string;
score:number;
}>;

semanticKnowledgeModels:Array<{
semantic:string;
score:number;
}>;

metaKnowledgeModels:Array<{
meta:string;
score:number;
}>;

reasoningKnowledgeModels:Array<{
reasoning:string;
score:number;
}>;

knowledgeInsights:Array<{
insight:string;
value:number;
}>;

knowledgeEvolutionRecords:Array<{
event:string;
growth:number;
}>;

knowledgeContext:Record<string,unknown>;

knowledgeState:"building"|"knowing"|"completed";

knowledgeVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
