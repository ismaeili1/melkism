/**
 * MELKISM Autonomous Intelligence Self-Aware Learning Contract
 *
 * v1.2.3
 */


export interface AutonomousSelfAwareLearningContract {


id:
string;


selfReflectiveLearningId:
string;


selfAwareContextId:
string;


identityModel:
Record<string,unknown>;



capabilityProfile:
Array<{

capability:
string;


strength:
number;


limitation:
number;


}>;



awarenessMetrics:
Array<{

metric:
string;


value:
number;


}>;



selfAwareModel:
Record<string,unknown>;



selfAwareState:
"detected"
|
"represented"
|
"understood"
|
"evaluated"
|
"adapted";


selfAwareVersion:
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

