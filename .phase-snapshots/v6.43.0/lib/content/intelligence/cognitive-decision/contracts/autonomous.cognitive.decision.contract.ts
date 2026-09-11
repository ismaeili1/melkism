/**
 * MELKISM Autonomous Intelligence Cognitive Decision Contract
 *
 * v1.2.9
 */


export interface AutonomousCognitiveDecisionContract {


id:
string;


cognitiveReasoningId:
string;


cognitiveDecisionId:
string;


decisionContext:
Record<string,unknown>;



optionModels:
Array<{

option:
string;


evaluation:
string;


score:
number;


}>;



decisionFactors:
Array<{

factor:
string;


weight:
number;


}>;



decisionState:
"analyzed"
|
"generated"
|
"evaluated"
|
"selected"
|
"validated";


decisionVersion:
number;


confidence:
number;


selectedOption:
string;


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

