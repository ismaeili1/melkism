/**
 * MELKISM Autonomous Decision Contract
 *
 * v0.9.7
 */


export interface AutonomousDecisionContract {


id:
string;


autonomousStateId:
string;


decisionContext:
string;


selectedAction:
string;


confidence:
number;


priority:
number;


status:
"evaluating"
|
"selected"
|
"executed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

