/**
 * MELKISM v1.5.2
 *
 * Autonomous Intelligence
 * Cognitive Self-Knowledge Contract
 */


export interface AutonomousCognitiveSelfKnowledgeContract {


id:
string;



cognitiveLearningId:
string;



cognitiveKnowledgeId:
string;



knowledgeEntities:
Array<{

entity:
string;


importance:
number;


}>;



knowledgeRelations:
Array<{

relation:
string;


strength:
number;


}>;



knowledgePatterns:
Array<{

pattern:
string;


confidence:
number;


}>;



knowledgeConfidence:
Array<{

knowledge:
string;


confidence:
number;


}>;



knowledgeUpdates:
Array<{

update:
string;


impact:
number;


}>;



knowledgeEvolution:
Array<{

evolution:
string;


growth:
number;


}>;



knowledgeInsights:
Array<{

insight:
string;


value:
number;


}>;



knowledgeState:
"capturing"
|
"representing"
|
"organizing"
|
"validating"
|
"updating"
|
"evolving"
|
"completed";



knowledgeVersion:
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

