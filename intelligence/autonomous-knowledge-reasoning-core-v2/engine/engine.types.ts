
import type {

AutonomousDecisionKnowledgeReasoningInput,

AutonomousDecisionKnowledgeReasoningRecord

} from "../contracts";



export interface AutonomousDecisionKnowledgeReasoningContext {


request:

AutonomousDecisionKnowledgeReasoningInput;


history:

AutonomousDecisionKnowledgeReasoningRecord[];


}



export interface AutonomousDecisionKnowledgeReasoningResult {


record:

AutonomousDecisionKnowledgeReasoningRecord;


executionTime:number;


}



