/**
 * MELKISM Autonomous Intelligence Cognitive Self-Organization Contract
 *
 * v1.3.9
 */


export interface AutonomousCognitiveSelfOrganizationContract {


id:
string;


cognitiveExpansionId:
string;


cognitiveOrganizationId:
string;


organizationSignals:
Array<{

signal:
string;


importance:
number;


}>;



cognitiveStructures:
Array<{

structure:
string;


stability:
number;


}>;



capabilityRelations:
Array<{

source:
string;


target:
string;


strength:
number;


}>;



knowledgeStructures:
Array<{

domain:
string;


organization:
number;


}>;



organizationStrategies:
Array<{

strategy:
string;


direction:
string;


priority:
number;


}>;



organizationContext:
Record<string,unknown>;



organizationState:
"observed"
|
"analyzed"
|
"classified"
|
"arranged"
|
"optimized"
|
"stabilized";



organizationVersion:
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

