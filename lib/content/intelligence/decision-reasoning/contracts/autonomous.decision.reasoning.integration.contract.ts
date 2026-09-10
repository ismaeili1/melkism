/**
 * MELKISM Autonomous Intelligence Decision Reasoning Integration Contract
 *
 * v1.0.7
 */


export interface AutonomousDecisionReasoningIntegrationContract {


id:
string;


reasoningFusionId:
string;


decisionContextId:
string;


decisionInputs:
Record<string,unknown>;


decisionOutput:
Record<string,unknown>;


decisionVersion:
number;


decisionConfidence:
number;


decisionStatus:
"created"
|
"processed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

