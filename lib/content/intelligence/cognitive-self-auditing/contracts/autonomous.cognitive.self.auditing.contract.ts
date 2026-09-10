/**
 * MELKISM v1.4.8
 *
 * Autonomous Intelligence
 * Cognitive Self-Auditing Contract
 */


export interface AutonomousCognitiveSelfAuditingContract {


id:
string;



cognitiveEvaluationId:
string;



cognitiveAuditId:
string;



auditCriteria:
Array<{

criterion:
string;


importance:
number;


}>;



internalStateChecks:
Array<{

state:
string;


valid:
boolean;


}>;



consistencyResults:
Array<{

area:
string;


score:
number;


}>;



integrityResults:
Array<{

component:
string;


integrity:
number;


}>;



deviationReports:
Array<{

deviation:
string;


severity:
number;


}>;



auditInsights:
Array<{

insight:
string;


impact:
number;


}>;



correctiveActions:
Array<{

action:
string;


priority:
number;


}>;



auditState:
"defining"
|
"inspecting"
|
"checking"
|
"verifying"
|
"reporting"
|
"correcting"
|
"completed";



auditVersion:
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

