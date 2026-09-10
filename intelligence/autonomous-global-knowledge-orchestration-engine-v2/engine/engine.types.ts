
import type {

MetaIntelligenceGlobalKnowledgeOrchestrationInput,

MetaIntelligenceGlobalKnowledgeOrchestrationRecord

} from "../contracts";



export interface MetaIntelligenceGlobalKnowledgeOrchestrationContext {


request:

MetaIntelligenceGlobalKnowledgeOrchestrationInput;


history:

MetaIntelligenceGlobalKnowledgeOrchestrationRecord[];


}



export interface MetaIntelligenceGlobalKnowledgeOrchestrationResult {


record:

MetaIntelligenceGlobalKnowledgeOrchestrationRecord;


executionTime:number;


}



