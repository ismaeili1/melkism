
import type {

CognitiveOSIntelligenceEcosystemInput,

CognitiveOSIntelligenceEcosystemRecord

} from "../contracts";



export interface CognitiveOSIntelligenceEcosystemContext {


request:

CognitiveOSIntelligenceEcosystemInput;


history:

CognitiveOSIntelligenceEcosystemRecord[];


}



export interface CognitiveOSIntelligenceEcosystemResult {


record:

CognitiveOSIntelligenceEcosystemRecord;


executionTime:number;


}



