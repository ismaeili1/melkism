/**
 * MELKISM Autonomous Intelligence Semantic Knowledge Fusion Contract
 *
 * v1.0.5
 */


export interface AutonomousSemanticKnowledgeFusionContract {


id:
string;


knowledgeEvolutionId:
string;


semanticContextId:
string;


semanticEntities:
string[];


knowledgeSnapshot:
Record<string,unknown>;


fusionVersion:
number;


confidence:
number;


fusionStatus:
"created"
|
"integrated";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

