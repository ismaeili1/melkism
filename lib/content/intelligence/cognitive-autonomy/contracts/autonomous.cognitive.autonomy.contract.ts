/**
 * MELKISM Autonomous Intelligence Cognitive Autonomy Contract
 *
 * v1.3.5
 */


export interface AutonomousCognitiveAutonomyContract {


id:
string;


cognitiveOptimizationId:
string;


cognitiveAutonomyId:
string;


autonomyGoals:
Array<{

goal:
string;


importance:
number;


}>;



priorityModels:
Array<{

priority:
string;


weight:
number;


}>;



decisionPolicies:
Array<{

policy:
string;


rule:
string;


}>;



autonomyContext:
Record<string,unknown>;



autonomyState:
"observed"
|
"evaluated"
|
"selected"
|
"prioritized"
|
"directed"
|
"maintained";



autonomyVersion:
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

