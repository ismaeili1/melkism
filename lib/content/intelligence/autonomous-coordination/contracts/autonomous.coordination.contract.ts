/**
 * MELKISM Autonomous Intelligence Coordination Contract
 *
 * v0.9.9
 */


export interface AutonomousCoordinationContract {


id:
string;


reasoningDecisionId:
string;


autonomousStateId:
string;


learningCycleId:
string;


coordinationMode:
"observe"
|
"coordinate"
|
"execute";


status:
"initialized"
|
"processing"
|
"completed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

