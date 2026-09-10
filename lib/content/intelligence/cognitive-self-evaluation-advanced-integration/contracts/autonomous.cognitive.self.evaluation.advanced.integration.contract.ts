export interface AutonomousCognitiveSelfEvaluationAdvancedIntegrationContract {

id:string;


cognitiveSelfReflectionAdvancedIntegrationId:string;


cognitiveSelfEvaluationAdvancedIntegrationId:string;



selfEvaluationModels:Array<{

model:string;

description:string;

confidence:number;

}>;



evaluationProcesses:Array<{

process:string;

score:number;

}>;



performanceEvaluationModels:Array<{

performance:string;

score:number;

}>;



decisionEvaluationModels:Array<{

decision:string;

score:number;

}>;



reasoningEvaluationModels:Array<{

reasoning:string;

score:number;

}>;



behaviorEvaluationModels:Array<{

behavior:string;

score:number;

}>;



adaptationEvaluationModels:Array<{

adaptation:string;

score:number;

}>;



knowledgeEvaluationModels:Array<{

knowledge:string;

score:number;

}>;



metaEvaluationModels:Array<{

meta:string;

score:number;

}>;



evaluationInsights:Array<{

insight:string;

value:number;

}>;



evaluationEvolutionRecords:Array<{

event:string;

growth:number;

}>;



evaluationContext:Record<string,unknown>;



evaluationState:
"building"|"evaluating"|"completed";



evaluationVersion:number;



confidence:number;



status:
"created"|"processing"|"completed";



createdAt:Date;

}
