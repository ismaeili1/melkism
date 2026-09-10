
import type {

CognitiveSynthesisKnowledgeConsciousnessIntegrationInput,

CognitiveSynthesisKnowledgeConsciousnessIntegrationRecord

} from "../contracts";



export interface CognitiveSynthesisKnowledgeConsciousnessIntegrationContext {


request:

CognitiveSynthesisKnowledgeConsciousnessIntegrationInput;


history:

CognitiveSynthesisKnowledgeConsciousnessIntegrationRecord[];


}



export interface CognitiveSynthesisKnowledgeConsciousnessIntegrationResult {


record:

CognitiveSynthesisKnowledgeConsciousnessIntegrationRecord;


executionTime:number;


}



