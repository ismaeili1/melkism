/**
 * MELKISM Autonomous Intelligence Memory Evolution Contract
 *
 * v1.0.3
 */


export interface AutonomousMemoryEvolutionContract {


id:
string;


memoryStateId:
string;


previousVersion:
number;


currentVersion:
number;


changeType:
"created"
|
"updated"
|
"evolved";


previousSnapshot:
Record<string,unknown>;


currentSnapshot:
Record<string,unknown>;


evolutionStatus:
"detected"
|
"processed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

