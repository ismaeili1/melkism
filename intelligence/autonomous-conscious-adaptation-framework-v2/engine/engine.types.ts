
import type {

SelfAwareIntelligenceConsciousAdaptationInput,

SelfAwareIntelligenceConsciousAdaptationRecord

} from "../contracts";



export interface SelfAwareIntelligenceConsciousAdaptationContext {


request:

SelfAwareIntelligenceConsciousAdaptationInput;


history:

SelfAwareIntelligenceConsciousAdaptationRecord[];


}



export interface SelfAwareIntelligenceConsciousAdaptationResult {


record:

SelfAwareIntelligenceConsciousAdaptationRecord;


executionTime:number;


}



