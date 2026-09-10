/**
 * MELKISM v1.4.6
 *
 * Autonomous Intelligence
 * Cognitive Self-Reflection Contract
 */


export interface AutonomousCognitiveSelfReflectionContract {


id:
string;



cognitiveRepresentationId:
string;



cognitiveReflectionId:
string;



experienceHistory:
Array<{

experience:
string;


impact:
number;


}>;



decisionAnalysis:
Array<{

decision:
string;


evaluation:
number;


}>;



performanceEvaluation:
Array<{

metric:
string;


score:
number;


}>;



cognitivePatterns:
Array<{

pattern:
string;


frequency:
number;


}>;



reflectionInsights:
Array<{

insight:
string;


value:
number;


}>;



improvementActions:
Array<{

action:
string;


priority:
number;


}>;



reflectionState:
"capturing"
|
"analyzing"
|
"evaluating"
|
"reflecting"
|
"insight"
|
"improving";



reflectionVersion:
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

