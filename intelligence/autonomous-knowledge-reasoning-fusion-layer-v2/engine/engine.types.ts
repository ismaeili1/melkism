
import type {

AutonomousGlobalKnowledgeReasoningFusionInput,

AutonomousGlobalKnowledgeReasoningFusionRecord

} from "../contracts";



export interface AutonomousGlobalKnowledgeReasoningFusionContext {


request:

AutonomousGlobalKnowledgeReasoningFusionInput;


history:

AutonomousGlobalKnowledgeReasoningFusionRecord[];


}



export interface AutonomousGlobalKnowledgeReasoningFusionResult {


record:

AutonomousGlobalKnowledgeReasoningFusionRecord;


executionTime:number;


}



