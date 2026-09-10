export interface AutonomousCognitiveSelfLearningAdvancedIntegrationContract {

id:string;

cognitiveSelfImprovementAdvancedIntegrationId:string;

cognitiveSelfLearningAdvancedIntegrationId:string;

selfLearningModels:Array<{
model:string;
description:string;
confidence:number;
}>;

learningProcesses:Array<{
process:string;
score:number;
}>;

adaptiveLearningModels:Array<{
adaptive:string;
score:number;
}>;

experienceLearningModels:Array<{
experience:string;
score:number;
}>;

knowledgeLearningModels:Array<{
knowledge:string;
score:number;
}>;

reasoningLearningModels:Array<{
reasoning:string;
score:number;
}>;

behaviorLearningModels:Array<{
behavior:string;
score:number;
}>;

metaLearningModels:Array<{
meta:string;
score:number;
}>;

learningInsights:Array<{
insight:string;
value:number;
}>;

learningEvolutionRecords:Array<{
event:string;
growth:number;
}>;

learningContext:Record<string,unknown>;

learningState:"building"|"learning"|"completed";

learningVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
