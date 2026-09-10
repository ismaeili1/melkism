/**
 * MELKISM Autonomous Intelligence Cognitive Adaptation Contract
 *
 * v1.3.3
 */


export interface AutonomousCognitiveAdaptationContract {


id:
string;


cognitiveFeedbackId:
string;


cognitiveAdaptationId:
string;


adaptationSignals:
Array<{

signal:
string;


impact:
number;


}>;



behaviorChanges:
Array<{

behavior:
string;


change:
string;


}>;



strategyAdjustments:
Array<{

strategy:
string;


adjustment:
string;


priority:
number;


}>;



adaptationContext:
Record<string,unknown>;



adaptationState:
"observed"
|
"interpreted"
|
"adjusted"
|
"applied"
|
"validated";



adaptationVersion:
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

