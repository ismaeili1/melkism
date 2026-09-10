
/**
 * MELKISM v1.5.34
 *
 * Autonomous Intelligence
 * Cognitive Self-Understanding Expansion Contract
 */


export interface AutonomousCognitiveSelfUnderstandingExpansionContract {


id:string;


cognitiveSelfKnowledgeExpansionId:string;


cognitiveSelfUnderstandingExpansionId:string;



selfUnderstandingModels:Array<{

understanding:string;

description:string;

confidence:number;

}>;



understandingAcquisitions:Array<{

understanding:string;

value:number;

}>;



selfUnderstandingDetections:Array<{

understanding:string;

score:number;

}>;



understandingRepresentations:Array<{

representation:string;

score:number;

}>;



understandingOrganizations:Array<{

organization:string;

score:number;

}>;



understandingAnalyses:Array<{

analysis:string;

score:number;

}>;



capabilityUnderstanding:Array<{

capability:string;

score:number;

}>;



experienceUnderstanding:Array<{

experience:string;

score:number;

}>;



learningUnderstanding:Array<{

learning:string;

score:number;

}>;



knowledgeUnderstanding:Array<{

knowledge:string;

score:number;

}>;



reasoningUnderstanding:Array<{

reasoning:string;

score:number;

}>;



decisionUnderstanding:Array<{

decision:string;

score:number;

}>;



behaviorUnderstanding:Array<{

behavior:string;

score:number;

}>;



adaptationUnderstanding:Array<{

adaptation:string;

score:number;

}>;



understandingVerifications:Array<{

verification:string;

score:number;

}>;



understandingMetrics:Array<{

metric:string;

value:number;

}>;



understandingCriteria:Array<{

criterion:string;

value:number;

}>;



understandingResults:Array<{

result:string;

score:number;

}>;



understandingOptimizations:Array<{

optimization:string;

value:number;

}>;



understandingScores:Array<{

metric:string;

score:number;

}>;



understandingEvolutionRecords:Array<{

event:string;

growth:number;

}>;



understandingInsights:Array<{

insight:string;

value:number;

}>;



understandingContext:

Record<string,unknown>;



understandingState:

"acquiring" |
"analyzing" |
"verifying" |
"completed";



understandingVersion:number;


confidence:number;


status:

"created" |
"processing" |
"completed";



metadata?:

Record<string,unknown>;



createdAt:Date;


}

