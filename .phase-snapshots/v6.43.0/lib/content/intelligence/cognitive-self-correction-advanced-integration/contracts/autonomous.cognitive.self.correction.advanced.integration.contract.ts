export interface AutonomousCognitiveSelfCorrectionAdvancedIntegrationContract {

id:string;

cognitiveSelfAuditingAdvancedIntegrationId:string;

cognitiveSelfCorrectionAdvancedIntegrationId:string;

selfCorrectionModels:Array<{
model:string;
description:string;
confidence:number;
}>;

correctionProcesses:Array<{
process:string;
score:number;
}>;

errorCorrectionModels:Array<{
error:string;
score:number;
}>;

qualityCorrectionModels:Array<{
quality:string;
score:number;
}>;

performanceCorrectionModels:Array<{
performance:string;
score:number;
}>;

knowledgeCorrectionModels:Array<{
knowledge:string;
score:number;
}>;

reasoningCorrectionModels:Array<{
reasoning:string;
score:number;
}>;

behaviorCorrectionModels:Array<{
behavior:string;
score:number;
}>;

metaCorrectionModels:Array<{
meta:string;
score:number;
}>;

correctionInsights:Array<{
insight:string;
value:number;
}>;

correctionEvolutionRecords:Array<{
event:string;
growth:number;
}>;

correctionContext:Record<string,unknown>;

correctionState:"building"|"correcting"|"completed";

correctionVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
