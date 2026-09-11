/**
 * MELKISM Autonomous Intelligence Self Modeling Learning Contract
 *
 * v1.2.4
 */


export interface AutonomousSelfModelingLearningContract {


id:
string;


selfAwareLearningId:
string;


selfModelContextId:
string;


cognitiveModel:
Record<string,unknown>;



capabilityGraph:
Array<{

capability:
string;


relationship:
string;


strength:
number;


}>;



evolutionMap:
Record<string,unknown>;



selfModel:
Record<string,unknown>;



selfModelState:
"captured"
|
"represented"
|
"structured"
|
"modeled"
|
"updated";


selfModelVersion:
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

