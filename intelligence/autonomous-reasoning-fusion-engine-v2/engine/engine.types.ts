
import type {

AutonomousKnowledgeReasoningFusionInput,

AutonomousKnowledgeReasoningFusionRecord

} from "../contracts";



export interface AutonomousKnowledgeReasoningFusionContext {


request:

AutonomousKnowledgeReasoningFusionInput;


history:

AutonomousKnowledgeReasoningFusionRecord[];


}



export interface AutonomousKnowledgeReasoningFusionResult {


record:

AutonomousKnowledgeReasoningFusionRecord;


executionTime:number;


}



