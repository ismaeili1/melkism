/**
 * MELKISM Autonomous Intelligence Cognitive Self-Healing Contract
 *
 * v1.4.2
 */


export interface AutonomousCognitiveSelfHealingContract {


id:
string;


cognitiveOptimizationId:
string;


cognitiveHealingId:
string;


healthSignals:
Array<{

signal:
string;


severity:
number;


}>;



detectedAnomalies:
Array<{

anomaly:
string;


impact:
number;


}>;



failurePatterns:
Array<{

pattern:
string;


frequency:
number;


}>;



healingStrategies:
Array<{

strategy:
string;


direction:
string;


priority:
number;


}>;



recoveryActions:
Array<{

action:
string;


effectiveness:
number;


}>;



healingContext:
Record<string,unknown>;



healingState:
"monitoring"
|
"detecting"
|
"diagnosing"
|
"repairing"
|
"recovering"
|
"stabilized";



healingVersion:
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

