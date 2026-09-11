
/**
 * MELKISM v1.5.27
 *
 * Autonomous Intelligence
 * Cognitive Self-Reflection Expansion Contract
 */


export interface AutonomousCognitiveSelfReflectionExpansionContract {


id:string;


cognitiveSelfRepresentationExpansionId:string;


cognitiveSelfReflectionExpansionId:string;



selfReflectionModels:Array<{

reflection:string;

description:string;

confidence:number;

}>;



representationReflections:Array<{

representation:string;

analysis:string;

}>;



stateReflections:Array<{

state:string;

insight:string;

}>;



capabilityReflections:Array<{

capability:string;

assessment:number;

}>;



knowledgeReflections:Array<{

knowledge:string;

assessment:number;

}>;



goalReflections:Array<{

goal:string;

alignment:number;

}>;



behaviorReflections:Array<{

behavior:string;

pattern:string;

}>;



decisionReflections:Array<{

decision:string;

quality:number;

}>;



performanceReflections:Array<{

metric:string;

score:number;

}>;



experienceReflections:Array<{

experience:string;

learning:number;

}>;



reflectionPatterns:Array<{

pattern:string;

value:number;

}>;



reflectionEvaluations:Array<{

metric:string;

score:number;

}>;



reflectionOptimizations:Array<{

optimization:string;

value:number;

}>;



reflectionVerifications:Array<{

verification:string;

score:number;

}>;



reflectionScores:Array<{

metric:string;

score:number;

}>;



reflectionEvolutionRecords:Array<{

event:string;

growth:number;

}>;



reflectionInsights:Array<{

insight:string;

value:number;

}>;



reflectionContext:

Record<string,unknown>;



reflectionState:

"observing" |
"evaluating" |
"optimizing" |
"completed";



reflectionVersion:number;


confidence:number;


status:

"created" |
"processing" |
"completed";



metadata?:

Record<string,unknown>;



createdAt:Date;


}

