/**
 * MELKISM v1.4.3
 *
 * Autonomous Intelligence
 * Cognitive Self-Awareness Contract
 */


export interface AutonomousCognitiveSelfAwarenessContract {


id:
string;



cognitiveHealingId:
string;



cognitiveAwarenessId:
string;



internalStates:
Array<{

state:
string;


value:
number;


}>;



capabilityProfile:
Array<{

capability:
string;


level:
number;


}>;



cognitiveProcesses:
Array<{

process:
string;


activity:
number;


}>;



selfKnowledgeModel:
{

identity:
string;


architecture:
string;


purpose:
string;


};



awarenessMetrics:
Array<{

metric:
string;


score:
number;


}>;



awarenessContext:
Record<string,unknown>;



awarenessState:
"observing"
|
"representing"
|
"understanding"
|
"evaluating"
|
"updating"
|
"aware";



awarenessVersion:
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

