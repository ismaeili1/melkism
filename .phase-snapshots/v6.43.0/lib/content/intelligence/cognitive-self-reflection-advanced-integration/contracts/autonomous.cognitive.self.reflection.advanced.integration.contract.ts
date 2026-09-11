export interface AutonomousCognitiveSelfReflectionAdvancedIntegrationContract {

id:string;

cognitiveSelfAwarenessAdvancedIntegrationId:string;

cognitiveSelfReflectionAdvancedIntegrationId:string;


selfReflectionModels:Array<{

model:string;

description:string;

confidence:number;

}>;


reflectionProcesses:Array<{

process:string;

score:number;

}>;


experienceReflectionModels:Array<{

experience:string;

score:number;

}>;


decisionReflectionModels:Array<{

decision:string;

score:number;

}>;


knowledgeReflectionModels:Array<{

knowledge:string;

score:number;

}>;


reasoningReflectionModels:Array<{

reasoning:string;

score:number;

}>;


behaviorReflectionModels:Array<{

behavior:string;

score:number;

}>;


adaptationReflectionModels:Array<{

adaptation:string;

score:number;

}>;


metaReflectionModels:Array<{

meta:string;

score:number;

}>;


reflectionInsights:Array<{

insight:string;

value:number;

}>;


reflectionEvolutionRecords:Array<{

event:string;

growth:number;

}>;


reflectionContext:Record<string,unknown>;


reflectionState:
"building"|"reflecting"|"completed";


reflectionVersion:number;


confidence:number;


status:
"created"|"processing"|"completed";


createdAt:Date;

}
