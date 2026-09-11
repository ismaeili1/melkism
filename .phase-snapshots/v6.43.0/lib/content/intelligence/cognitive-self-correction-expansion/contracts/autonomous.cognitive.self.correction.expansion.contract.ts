
/**
 * MELKISM v1.5.30
 *
 * Autonomous Intelligence
 * Cognitive Self-Correction Expansion Contract
 */


export interface AutonomousCognitiveSelfCorrectionExpansionContract {


id:string;


cognitiveSelfAuditingExpansionId:string;


cognitiveSelfCorrectionExpansionId:string;



selfCorrectionModels:Array<{

correction:string;

description:string;

confidence:number;

}>;



issueDetections:Array<{

issue:string;

severity:number;

}>;



errorAnalyses:Array<{

error:string;

impact:number;

}>;



deviationAnalyses:Array<{

deviation:string;

severity:number;

}>;



correctionPlans:Array<{

plan:string;

priority:number;

}>;



correctionStrategies:Array<{

strategy:string;

value:number;

}>;



identityCorrections:Array<{

identity:string;

score:number;

}>;



representationCorrections:Array<{

representation:string;

score:number;

}>;



reflectionCorrections:Array<{

reflection:string;

score:number;

}>;



evaluationCorrections:Array<{

evaluation:string;

score:number;

}>;



capabilityCorrections:Array<{

capability:string;

score:number;

}>;



knowledgeCorrections:Array<{

knowledge:string;

score:number;

}>;



goalCorrections:Array<{

goal:string;

score:number;

}>;



behaviorCorrections:Array<{

behavior:string;

score:number;

}>;



decisionCorrections:Array<{

decision:string;

score:number;

}>;



performanceCorrections:Array<{

metric:string;

score:number;

}>;



experienceCorrections:Array<{

experience:string;

score:number;

}>;



correctionExecutions:Array<{

execution:string;

result:number;

}>;



correctionVerifications:Array<{

verification:string;

score:number;

}>;



correctionMetrics:Array<{

metric:string;

value:number;

}>;



correctionCriteria:Array<{

criterion:string;

value:number;

}>;



correctionResults:Array<{

result:string;

score:number;

}>;



correctionOptimizations:Array<{

optimization:string;

value:number;

}>;



correctionScores:Array<{

metric:string;

score:number;

}>;



correctionEvolutionRecords:Array<{

event:string;

growth:number;

}>;



correctionInsights:Array<{

insight:string;

value:number;

}>;



correctionContext:

Record<string,unknown>;



correctionState:

"detecting" |
"correcting" |
"verifying" |
"completed";



correctionVersion:number;


confidence:number;


status:

"created" |
"processing" |
"completed";



metadata?:

Record<string,unknown>;



createdAt:Date;


}

