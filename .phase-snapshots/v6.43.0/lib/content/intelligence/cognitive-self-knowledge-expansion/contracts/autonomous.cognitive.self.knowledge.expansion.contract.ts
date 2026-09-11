
/**
 * MELKISM v1.5.33
 *
 * Autonomous Intelligence
 * Cognitive Self-Knowledge Expansion Contract
 */


export interface AutonomousCognitiveSelfKnowledgeExpansionContract {


id:string;


cognitiveSelfLearningExpansionId:string;


cognitiveSelfKnowledgeExpansionId:string;



selfKnowledgeModels:Array<{

knowledge:string;

description:string;

confidence:number;

}>;



knowledgeAcquisitions:Array<{

knowledge:string;

value:number;

}>;



selfKnowledgeDetections:Array<{

knowledge:string;

score:number;

}>;



knowledgeRepresentations:Array<{

representation:string;

score:number;

}>;



knowledgeOrganizations:Array<{

organization:string;

score:number;

}>;



knowledgeAnalyses:Array<{

analysis:string;

score:number;

}>;



capabilityKnowledge:Array<{

capability:string;

score:number;

}>;



experienceKnowledge:Array<{

experience:string;

score:number;

}>;



learningKnowledge:Array<{

learning:string;

score:number;

}>;



reasoningKnowledge:Array<{

reasoning:string;

score:number;

}>;



decisionKnowledge:Array<{

decision:string;

score:number;

}>;



behaviorKnowledge:Array<{

behavior:string;

score:number;

}>;



adaptationKnowledge:Array<{

adaptation:string;

score:number;

}>;



knowledgeVerifications:Array<{

verification:string;

score:number;

}>;



knowledgeMetrics:Array<{

metric:string;

value:number;

}>;



knowledgeCriteria:Array<{

criterion:string;

value:number;

}>;



knowledgeResults:Array<{

result:string;

score:number;

}>;



knowledgeOptimizations:Array<{

optimization:string;

value:number;

}>;



knowledgeScores:Array<{

metric:string;

score:number;

}>;



knowledgeEvolutionRecords:Array<{

event:string;

growth:number;

}>;



knowledgeInsights:Array<{

insight:string;

value:number;

}>;



knowledgeContext:

Record<string,unknown>;



knowledgeState:

"acquiring" |
"organizing" |
"verifying" |
"completed";



knowledgeVersion:number;


confidence:number;


status:

"created" |
"processing" |
"completed";



metadata?:

Record<string,unknown>;



createdAt:Date;


}

