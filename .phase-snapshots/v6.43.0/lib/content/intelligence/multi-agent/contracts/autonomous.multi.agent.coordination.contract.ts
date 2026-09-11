/**
 * MELKISM Autonomous Intelligence Multi-Agent Coordination Contract
 *
 * v1.0.9
 */


export interface AutonomousMultiAgentCoordinationContract {


id:
string;


decisionCoordinationId:
string;


agents:
Array<{

id:
string;


role:
string;


capability:
string;


state:
"available"
|
"working"
|
"completed";


confidence:
number;


}>;



coordinationContextId:
string;


task:
Record<string,unknown>;


result:
Record<string,unknown>;


coordinationVersion:
number;


status:
"created"
|
"coordinated"
|
"completed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

