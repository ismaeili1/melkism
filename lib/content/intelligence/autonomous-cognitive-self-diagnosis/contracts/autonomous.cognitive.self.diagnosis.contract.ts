export interface AutonomousCognitiveSelfDiagnosisContract {

id:string;

metaReflectionId:string;

diagnosisId:string;


systemHealthModels:Array<{
metric:string;
score:number;
}>;


anomalyDetectionModels:Array<{
anomaly:string;
severity:number;
}>;


capabilityHealthModels:Array<{
capability:string;
health:number;
}>;


cognitiveIntegrityModels:Array<{
integrity:string;
score:number;
}>;


performanceDiagnosisModels:Array<{
performance:string;
score:number;
}>;


reasoningDiagnosisModels:Array<{
reasoning:string;
quality:number;
}>;


decisionDiagnosisModels:Array<{
decision:string;
quality:number;
}>;


behaviorDiagnosisModels:Array<{
behavior:string;
quality:number;
}>;


learningDiagnosisModels:Array<{
learning:string;
quality:number;
}>;


correctiveIntelligenceModels:Array<{
correction:string;
priority:number;
}>;


diagnosticInsights:Array<{
insight:string;
value:number;
}>;


diagnosticEvolutionTracking:Array<{
cycle:string;
growth:number;
}>;


diagnosisState:
"initializing"|"diagnosing"|"completed";


diagnosisVersion:number;

confidence:number;

status:
"created"|"active"|"completed";

createdAt:Date;
}
