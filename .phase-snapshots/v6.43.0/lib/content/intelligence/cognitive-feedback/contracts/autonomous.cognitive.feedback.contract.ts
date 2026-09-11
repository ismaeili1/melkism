/**
 * MELKISM Autonomous Intelligence Cognitive Feedback Contract
 *
 * v1.3.2
 */


export interface AutonomousCognitiveFeedbackContract {


id:
string;


cognitiveExecutionId:
string;


cognitiveFeedbackId:
string;


executionResult:
Record<string,unknown>;



feedbackSignals:
Array<{

signal:
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



feedbackRecommendations:
Array<{

recommendation:
string;


priority:
number;


}>;



feedbackState:
"collected"
|
"analyzed"
|
"evaluated"
|
"recommended"
|
"integrated";



feedbackVersion:
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

