/**
 * MELKISM Autonomous Intelligence Predictive Learning Contract
 *
 * v1.1.2
 */


export interface AutonomousPredictiveLearningContract {


id:
string;


adaptiveLearningId:
string;


predictionContextId:
string;


predictiveSignals:
Array<{

signal:
string;


value:
unknown;


confidence:
number;


}>;



futureStateModel:
Record<string,unknown>;



predictionState:
"observed"
|
"modeled"
|
"predicted"
|
"evaluated"
|
"integrated";


predictionVersion:
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

