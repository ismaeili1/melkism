/**
 * MELKISM Autonomous Intelligence Prescriptive Learning Contract
 *
 * v1.1.4
 */


export interface AutonomousPrescriptiveLearningContract {


id:
string;


proactiveLearningId:
string;


prescriptiveContextId:
string;


availableActions:
Array<{

action:
string;


expectedOutcome:
Record<string,unknown>;


score:
number;


}>;



optimizationCriteria:
Record<string,unknown>;



recommendedAction:
Record<string,unknown>;



prescriptiveState:
"received"
|
"evaluated"
|
"optimized"
|
"recommended"
|
"integrated";


prescriptiveVersion:
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

