/**
 * MELKISM Autonomous Intelligence Decision Coordination Contract
 *
 * v1.0.8
 */


export interface AutonomousDecisionCoordinationContract {


id:
string;


decisionReasoningId:
string;


coordinationContextId:
string;


priority:
"low"
|
"medium"
|
"high";


executionState:
"created"
|
"analyzed"
|
"coordinated"
|
"executed";


coordinationInputs:
Record<string,unknown>;


coordinationOutput:
Record<string,unknown>;


coordinationVersion:
number;


confidence:
number;


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

