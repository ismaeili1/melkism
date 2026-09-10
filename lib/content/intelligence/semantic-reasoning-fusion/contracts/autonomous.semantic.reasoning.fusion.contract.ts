/**
 * MELKISM Autonomous Intelligence Semantic Reasoning Fusion Contract
 *
 * v1.0.6
 */


export interface AutonomousSemanticReasoningFusionContract {


id:
string;


semanticFusionId:
string;


reasoningContextId:
string;


reasoningInputs:
Record<string,unknown>;


reasoningOutput:
Record<string,unknown>;


inferenceVersion:
number;


reasoningConfidence:
number;


reasoningStatus:
"created"
|
"processed";


metadata?:
Record<string,unknown>;


createdAt:
Date;


}

