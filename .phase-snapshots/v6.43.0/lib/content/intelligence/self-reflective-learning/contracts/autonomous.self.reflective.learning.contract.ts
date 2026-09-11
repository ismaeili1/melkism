/**
 * MELKISM Autonomous Intelligence Self Reflective Learning Contract
 *
 * v1.2.2
 */


export interface AutonomousSelfReflectiveLearningContract {


id:
string;


recursiveLearningId:
string;


selfReflectionContextId:
string;


intelligenceState:
Record<string,unknown>;



reflectionMetrics:
Array<{

metric:
string;


value:
number;


}>;



improvementInsights:
Array<{

insight:
string;


priority:
number;


}>;



reflectionModel:
Record<string,unknown>;



selfReflectiveState:
"observed"
|
"reflected"
|
"analyzed"
|
"understood"
|
"improved";


selfReflectiveVersion:
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

