/**
 * MELKISM Autonomous Reasoning Decision Contract
 *
 * v0.9.8
 */


export interface AutonomousReasoningDecisionContract {


id:
string;


decisionStateId:
string;


reasoningContext:
string;


reasoningResult:
string;


recommendedAction:
string;


confidence:
number;


status:
"analyzing"
|
"recommended"
|
"accepted";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

