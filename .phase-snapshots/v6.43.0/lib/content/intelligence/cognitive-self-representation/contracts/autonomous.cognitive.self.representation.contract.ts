/**
 * MELKISM v1.4.5
 *
 * Autonomous Intelligence
 * Cognitive Self-Representation Contract
 */


export interface AutonomousCognitiveSelfRepresentationContract {


id:
string;



cognitiveSelfModelId:
string;



cognitiveRepresentationId:
string;



identityRepresentation:
{

name:
string;


type:
string;


purpose:
string;


};



structuralRepresentation:
Array<{

component:
string;


role:
string;


}>;



capabilityRepresentation:
Array<{

capability:
string;


level:
number;


}>;



knowledgeRepresentation:
Array<{

domain:
string;


knowledge:
string;


}>;



contextualRepresentation:
Record<string,unknown>;



evolutionRepresentation:
Array<{

stage:
string;


progress:
number;


}>;



representationGraph:
Array<{

node:
string;


connection:
string;


}>;



representationState:
"extracting"
|
"encoding"
|
"representing"
|
"connecting"
|
"interpreting"
|
"updated";



representationVersion:
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

