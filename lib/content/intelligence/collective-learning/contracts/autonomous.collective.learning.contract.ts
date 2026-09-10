/**
 * MELKISM Autonomous Intelligence Collective Learning Contract
 *
 * v1.1.0
 */


export interface AutonomousCollectiveLearningContract {


id:
string;


multiAgentCoordinationId:
string;


learningAgents:
Array<{

agentId:
string;


experience:
Record<string,unknown>;


outcome:
Record<string,unknown>;


confidence:
number;


learningState:
"created"
|
"observed"
|
"analyzed"
|
"learned"
|
"integrated";

}>;



learningContextId:
string;


knowledgeUpdate:
Record<string,unknown>;


learningVersion:
number;


status:
"created"
|
"learning"
|
"completed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

