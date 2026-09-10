/**
 * MELKISM Autonomous Intelligence Core Contract
 *
 * v1.0.0
 */


export interface AutonomousIntelligenceCoreContract {


id:
string;


coordinationStateId:
string;


intelligenceMode:
"observe"
|
"reason"
|
"decide"
|
"learn"
|
"adapt";


reasoningStatus:
"pending"
|
"active"
|
"completed";


decisionStatus:
"pending"
|
"selected"
|
"executed";


learningStatus:
"pending"
|
"learning"
|
"updated";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

