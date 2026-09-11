/**
 * MELKISM v1.4.7
 *
 * Autonomous Intelligence
 * Cognitive Self-Evaluation Contract
 */


export interface AutonomousCognitiveSelfEvaluationContract {


id:
string;



cognitiveReflectionId:
string;



cognitiveEvaluationId:
string;



performanceMetrics:
Array<{

metric:
string;


value:
number;


}>;



capabilityScores:
Array<{

capability:
string;


score:
number;


}>;



qualityIndicators:
Array<{

indicator:
string;


score:
number;


}>;



goalAlignment:
{

target:
string;


alignmentScore:
number;


};



evaluationInsights:
Array<{

insight:
string;


impact:
number;


}>;



optimizationRecommendations:
Array<{

recommendation:
string;


priority:
number;


}>;



evaluationState:
"collecting"
|
"measuring"
|
"evaluating"
|
"scoring"
|
"recommending"
|
"completed";



evaluationVersion:
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

