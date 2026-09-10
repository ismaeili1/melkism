
import type {

SelfAwareIntelligenceIntelligenceAdaptationInput,

SelfAwareIntelligenceIntelligenceAdaptationRecord

} from "../contracts";



export interface SelfAwareIntelligenceIntelligenceAdaptationContext {


request:

SelfAwareIntelligenceIntelligenceAdaptationInput;


history:

SelfAwareIntelligenceIntelligenceAdaptationRecord[];


}



export interface SelfAwareIntelligenceIntelligenceAdaptationResult {


record:

SelfAwareIntelligenceIntelligenceAdaptationRecord;


executionTime:number;


}



