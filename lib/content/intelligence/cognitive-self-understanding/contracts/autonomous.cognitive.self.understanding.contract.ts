/**
 * MELKISM v1.5.3
 *
 * Autonomous Intelligence
 * Cognitive Self-Understanding Contract
 */


export interface AutonomousCognitiveSelfUnderstandingContract {


id:
string;



cognitiveKnowledgeId:
string;



cognitiveUnderstandingId:
string;



knowledgeInputs:
Array<{

input:
string;


importance:
number;


}>;



interpretationModels:
Array<{

model:
string;


accuracy:
number;


}>;



contextMappings:
Array<{

context:
string;


relevance:
number;


}>;



meaningPatterns:
Array<{

meaning:
string;


confidence:
number;


}>;



understandingLevels:
Array<{

level:
string;


score:
number;


}>;



comprehensionResults:
Array<{

result:
string;


quality:
number;


}>;



understandingInsights:
Array<{

insight:
string;


value:
number;


}>;



understandingState:
"capturing"
|
"interpreting"
|
"analyzing"
|
"extracting"
|
"comprehending"
|
"evolving"
|
"completed";



understandingVersion:
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

