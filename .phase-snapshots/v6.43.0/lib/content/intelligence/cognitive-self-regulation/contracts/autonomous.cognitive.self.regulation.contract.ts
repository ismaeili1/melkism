/**
 * MELKISM Autonomous Intelligence Cognitive Self-Regulation Contract
 *
 * v1.4.0
 */


export interface AutonomousCognitiveSelfRegulationContract {


id:
string;


cognitiveOrganizationId:
string;


cognitiveRegulationId:
string;


regulationSignals:
Array<{

signal:
string;


severity:
number;


}>;



internalStates:
Array<{

state:
string;


value:
number;


}>;



performanceMetrics:
Array<{

metric:
string;


score:
number;


}>;



regulationStrategies:
Array<{

strategy:
string;


direction:
string;


priority:
number;


}>;



adaptiveControls:
Array<{

control:
string;


level:
number;


}>;



regulationContext:
Record<string,unknown>;



regulationState:
"observed"
|
"monitored"
|
"detected"
|
"adjusted"
|
"balanced"
|
"stabilized";



regulationVersion:
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

