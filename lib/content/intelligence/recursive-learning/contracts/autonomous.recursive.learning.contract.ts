/**
 * MELKISM Autonomous Intelligence Recursive Learning Contract
 *
 * v1.2.1
 */


export interface AutonomousRecursiveLearningContract {


id:
string;


metaLearningId:
string;


recursiveContextId:
string;


recursiveCycles:
Array<{

cycle:
number;


improvement:
number;


}>;



feedbackLoops:
Array<{

source:
string;


impact:
number;


}>;



improvementStrategy:
Record<string,unknown>;



recursiveModel:
Record<string,unknown>;



recursiveState:
"observed"
|
"learned"
|
"evaluated"
|
"reentered"
|
"improved";


recursiveVersion:
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

