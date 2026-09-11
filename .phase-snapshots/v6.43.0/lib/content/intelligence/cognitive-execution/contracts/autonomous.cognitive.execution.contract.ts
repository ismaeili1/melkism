/**
 * MELKISM Autonomous Intelligence Cognitive Execution Contract
 *
 * v1.3.1
 */


export interface AutonomousCognitiveExecutionContract {


id:
string;


cognitivePlanningId:
string;


cognitiveExecutionId:
string;


executionContext:
Record<string,unknown>;



taskModels:
Array<{

task:
string;


objective:
string;


priority:
number;


status:
"pending"
|
"active"
|
"completed";


}>;



executionSteps:
Array<{

step:
number;


action:
string;


result:
string;


}>;



executionState:
"initialized"
|
"activated"
|
"executing"
|
"monitoring"
|
"evaluated"
|
"completed";



executionVersion:
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

