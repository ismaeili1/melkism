/**
 * MELKISM Autonomous Intelligence Proactive Learning Contract
 *
 * v1.1.3
 */


export interface AutonomousProactiveLearningContract {


id:
string;


predictiveLearningId:
string;


proactiveContextId:
string;


actionSignals:
Array<{

signal:
string;


value:
unknown;


confidence:
number;


urgency:
"low"
|
"medium"
|
"high";


}>;



anticipationModel:
Record<string,unknown>;



proactiveState:
"detected"
|
"analyzed"
|
"anticipated"
|
"prepared"
|
"integrated";


proactiveVersion:
number;


confidence:
number;


status:
"created"
|
"processing"
|
"completed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

