/**
 * MELKISM Autonomous Intelligence Adaptive Learning Contract
 *
 * v1.1.1
 */


export interface AutonomousAdaptiveLearningContract {


id:
string;


collectiveLearningId:
string;


adaptiveContextId:
string;


learningSignals:
Array<{

signal:
string;


value:
unknown;


confidence:
number;


}>;



adaptationMode:
"reactive"
|
"dynamic"
|
"predictive";


adaptationState:
"observed"
|
"evaluated"
|
"adapted"
|
"optimized"
|
"integrated";


knowledgeAdjustment:
Record<string,unknown>;


adaptationVersion:
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

