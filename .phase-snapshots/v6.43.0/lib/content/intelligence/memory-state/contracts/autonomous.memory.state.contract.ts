/**
 * MELKISM Autonomous Intelligence Memory-State Contract
 *
 * v1.0.2
 */


export interface AutonomousMemoryStateContract {


id:
string;


stateId:
string;


memoryId:
string;


snapshot:
Record<string,unknown>;


evolutionVersion:
number;


synchronizationStatus:
"pending"
|
"synchronized";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

