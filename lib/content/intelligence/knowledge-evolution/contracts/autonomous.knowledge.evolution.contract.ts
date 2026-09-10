/**
 * MELKISM Autonomous Intelligence Knowledge Evolution Contract
 *
 * v1.0.4
 */


export interface AutonomousKnowledgeEvolutionContract {


id:
string;


memoryEvolutionId:
string;


knowledgeId:
string;


previousKnowledge:
Record<string,unknown>;


currentKnowledge:
Record<string,unknown>;


previousVersion:
number;


currentVersion:
number;


evolutionType:
"created"
|
"updated"
|
"expanded";


status:
"detected"
|
"integrated";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

