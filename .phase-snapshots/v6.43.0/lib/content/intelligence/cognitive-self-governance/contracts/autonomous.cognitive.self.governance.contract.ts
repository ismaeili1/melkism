/**
 * MELKISM Autonomous Intelligence Cognitive Self-Governance Contract
 *
 * v1.3.6
 */


export interface AutonomousCognitiveSelfGovernanceContract {


id:
string;


cognitiveAutonomyId:
string;


cognitiveGovernanceId:
string;


governanceRules:
Array<{

rule:
string;


importance:
number;


}>;



internalPolicies:
Array<{

policy:
string;


status:
"active"
|
"review"
|
"adjusted";


}>;



evaluationCriteria:
Array<{

criterion:
string;


score:
number;


}>;



governanceContext:
Record<string,unknown>;



governanceState:
"observed"
|
"evaluated"
|
"governed"
|
"adjusted"
|
"controlled"
|
"maintained";



governanceVersion:
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

