/**
 * MELKISM Autonomous Intelligence Cognitive Awareness Contract
 *
 * v1.2.6
 */


export interface AutonomousCognitiveAwarenessContract {


id:
string;


cognitiveSelfRepresentationId:
string;


cognitiveAwarenessId:
string;


awarenessContext:
Record<string,unknown>;



interpretationModel:
Record<string,unknown>;



awarenessMetrics:
Array<{

metric:
string;


value:
number;


}>;



cognitiveState:
Record<string,unknown>;



awarenessState:
"observed"
|
"interpreted"
|
"understood"
|
"integrated"
|
"adapted";


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

