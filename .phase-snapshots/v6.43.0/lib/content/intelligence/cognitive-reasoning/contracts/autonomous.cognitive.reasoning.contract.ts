/**
 * MELKISM Autonomous Intelligence Cognitive Reasoning Contract
 *
 * v1.2.8
 */


export interface AutonomousCognitiveReasoningContract {


id:
string;


cognitiveUnderstandingId:
string;


cognitiveReasoningId:
string;


reasoningContext:
Record<string,unknown>;



inferenceModel:
Record<string,unknown>;



reasoningChains:
Array<{

premise:
string;


inference:
string;


conclusion:
string;


confidence:
number;


}>;



reasoningState:
"observed"
|
"analyzed"
|
"inferred"
|
"evaluated"
|
"concluded";


reasoningVersion:
number;


confidence:
number;


status:
"created"
|
"processing"
|
"completed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

