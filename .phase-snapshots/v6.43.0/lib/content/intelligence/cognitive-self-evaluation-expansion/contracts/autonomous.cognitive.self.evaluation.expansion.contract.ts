
/**
 * MELKISM v1.5.28
 *
 * Autonomous Intelligence
 * Cognitive Self-Evaluation Expansion Contract
 */


export interface AutonomousCognitiveSelfEvaluationExpansionContract {


id:string;


cognitiveSelfReflectionExpansionId:string;


cognitiveSelfEvaluationExpansionId:string;



selfEvaluationModels:Array<{

evaluation:string;

description:string;

confidence:number;

}>;



identityEvaluations:Array<{

identity:string;

score:number;

}>;



capabilityEvaluations:Array<{

capability:string;

score:number;

}>;



knowledgeEvaluations:Array<{

knowledge:string;

score:number;

}>;



goalEvaluations:Array<{

goal:string;

score:number;

}>;



behaviorEvaluations:Array<{

behavior:string;

score:number;

}>;



decisionEvaluations:Array<{

decision:string;

score:number;

}>;



performanceEvaluations:Array<{

metric:string;

score:number;

}>;



experienceEvaluations:Array<{

experience:string;

score:number;

}>;



learningEvaluations:Array<{

learning:string;

score:number;

}>;



adaptationEvaluations:Array<{

adaptation:string;

score:number;

}>;



qualityMeasurements:Array<{

metric:string;

quality:number;

}>;



gapDetections:Array<{

gap:string;

severity:number;

}>;



evaluationMetrics:Array<{

metric:string;

value:number;

}>;



evaluationCriteria:Array<{

criterion:string;

value:number;

}>;



evaluationResults:Array<{

result:string;

score:number;

}>;



evaluationOptimizations:Array<{

optimization:string;

value:number;

}>;



evaluationVerifications:Array<{

verification:string;

score:number;

}>;



evaluationScores:Array<{

metric:string;

score:number;

}>;



evaluationEvolutionRecords:Array<{

event:string;

growth:number;

}>;



evaluationInsights:Array<{

insight:string;

value:number;

}>;



evaluationContext:

Record<string,unknown>;



evaluationState:

"measuring" |
"evaluating" |
"optimizing" |
"completed";



evaluationVersion:number;


confidence:number;


status:

"created" |
"processing" |
"completed";



metadata?:

Record<string,unknown>;



createdAt:Date;


}

