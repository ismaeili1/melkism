/**
 * MELKISM Autonomous Intelligence Cognitive Understanding Contract
 *
 * v1.2.7
 */


export interface AutonomousCognitiveUnderstandingContract {


id:
string;


cognitiveAwarenessId:
string;


cognitiveUnderstandingId:
string;


semanticModel:
Record<string,unknown>;



knowledgeRelations:
Array<{

concept:
string;


relation:
string;


strength:
number;


}>;



understandingContext:
Record<string,unknown>;



understandingState:
"received"
|
"interpreted"
|
"related"
|
"understood"
|
"integrated";


understandingVersion:
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

