
import type {

CognitiveSynthesisIntelligenceIntegrationInput,

CognitiveSynthesisIntelligenceIntegrationRecord

} from "../contracts";



export interface CognitiveSynthesisIntelligenceIntegrationContext {


request:

CognitiveSynthesisIntelligenceIntegrationInput;


history:

CognitiveSynthesisIntelligenceIntegrationRecord[];


}



export interface CognitiveSynthesisIntelligenceIntegrationResult {


record:

CognitiveSynthesisIntelligenceIntegrationRecord;


executionTime:number;


}



