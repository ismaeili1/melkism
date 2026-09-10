/**
 * MELKISM Autonomous Intelligence Contract
 *
 * v0.9.6
 */


export interface AutonomousStateContract {


id:
string;


selfAdaptiveStateId:
string;


goal:
string;


action:
string;


confidence:
number;


status:
"observe"
|
"execute"
|
"complete";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

