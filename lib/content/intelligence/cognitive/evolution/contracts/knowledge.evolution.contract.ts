/**
 * MELKISM Knowledge Evolution Contract
 *
 * v0.9.2
 */


export interface KnowledgeEvolutionContract {


id:
string;


knowledgeId:
string;


version:
number;


changeType:
"created"
|
"updated"
|
"merged"
|
"deprecated";


confidence:
number;


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

