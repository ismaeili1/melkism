
import type {

SelfAwareIntelligenceSelfAwareIntelligenceInput,

SelfAwareIntelligenceSelfAwareIntelligenceRecord

} from "../contracts";



export interface SelfAwareIntelligenceSelfAwareIntelligenceContext {


request:

SelfAwareIntelligenceSelfAwareIntelligenceInput;


history:

SelfAwareIntelligenceSelfAwareIntelligenceRecord[];


}



export interface SelfAwareIntelligenceSelfAwareIntelligenceResult {


record:

SelfAwareIntelligenceSelfAwareIntelligenceRecord;


executionTime:number;


}



