
import type {

AutonomousKnowledgeInsightGenerationInput,

AutonomousKnowledgeInsightGenerationRecord

} from "../contracts";



export interface AutonomousKnowledgeInsightGenerationContext {


request:

AutonomousKnowledgeInsightGenerationInput;


history:

AutonomousKnowledgeInsightGenerationRecord[];


}



export interface AutonomousKnowledgeInsightGenerationResult {


record:

AutonomousKnowledgeInsightGenerationRecord;


executionTime:number;


}



