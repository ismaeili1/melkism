export interface AutonomousCognitiveSelfAuditingAdvancedIntegrationContract {

id:string;

cognitiveSelfEvaluationAdvancedIntegrationId:string;

cognitiveSelfAuditingAdvancedIntegrationId:string;

selfAuditingModels:Array<{
model:string;
description:string;
confidence:number;
}>;

auditingProcesses:Array<{
process:string;
score:number;
}>;

integrityAuditingModels:Array<{
integrity:string;
score:number;
}>;

performanceAuditingModels:Array<{
performance:string;
score:number;
}>;

qualityAuditingModels:Array<{
quality:string;
score:number;
}>;

securityAuditingModels:Array<{
security:string;
score:number;
}>;

knowledgeAuditingModels:Array<{
knowledge:string;
score:number;
}>;

reasoningAuditingModels:Array<{
reasoning:string;
score:number;
}>;

behaviorAuditingModels:Array<{
behavior:string;
score:number;
}>;

metaAuditingModels:Array<{
meta:string;
score:number;
}>;

auditingInsights:Array<{
insight:string;
value:number;
}>;

auditingEvolutionRecords:Array<{
event:string;
growth:number;
}>;

auditingContext:Record<string,unknown>;

auditingState:"building"|"auditing"|"completed";

auditingVersion:number;

confidence:number;

status:"created"|"processing"|"completed";

createdAt:Date;

}
