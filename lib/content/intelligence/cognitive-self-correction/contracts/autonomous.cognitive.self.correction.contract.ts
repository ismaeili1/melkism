/**
 * MELKISM v1.4.9
 *
 * Autonomous Intelligence
 * Cognitive Self-Correction Contract
 */


export interface AutonomousCognitiveSelfCorrectionContract {


id:
string;



cognitiveAuditId:
string;



cognitiveCorrectionId:
string;



detectedIssues:
Array<{

issue:
string;


severity:
number;


}>;



rootCauses:
Array<{

cause:
string;


confidence:
number;


}>;



correctionStrategies:
Array<{

strategy:
string;


priority:
number;


}>;



repairActions:
Array<{

action:
string;


impact:
number;


}>;



verificationResults:
Array<{

verification:
string;


success:
boolean;


}>;



correctionInsights:
Array<{

insight:
string;


value:
number;


}>;



learningUpdates:
Array<{

update:
string;


importance:
number;


}>;



correctionState:
"detecting"
|
"analyzing"
|
"planning"
|
"repairing"
|
"verifying"
|
"learning"
|
"completed";



correctionVersion:
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

