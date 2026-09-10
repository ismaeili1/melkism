/**
 * MELKISM Autonomous Intelligence Cognitive Planning Contract
 *
 * v1.3.0
 */


export interface AutonomousCognitivePlanningContract {


id:
string;


cognitiveDecisionId:
string;


cognitivePlanningId:
string;


goalModel:
Record<string,unknown>;



strategyModel:
Record<string,unknown>;



actionSequence:
Array<{

step:
number;


action:
string;


objective:
string;


priority:
number;


}>;



planningContext:
Record<string,unknown>;



planningState:
"defined"
|
"analyzed"
|
"generated"
|
"sequenced"
|
"optimized"
|
"ready";


planningVersion:
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

