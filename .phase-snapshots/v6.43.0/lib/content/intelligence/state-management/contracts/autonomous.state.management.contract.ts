/**
 * MELKISM Autonomous Intelligence State Management Contract
 *
 * v1.0.1
 */


export interface AutonomousStateManagementContract {


id:
string;


coreStateId:
string;


version:
number;


state:
Record<string,unknown>;


status:
"created"
|
"updated"
|
"evolved";


previousVersionId?:
string;


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

