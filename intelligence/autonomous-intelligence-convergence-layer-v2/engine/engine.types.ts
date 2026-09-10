
import type {

IntelligenceUnityIntelligenceConvergenceInput,

IntelligenceUnityIntelligenceConvergenceRecord

} from "../contracts";



export interface IntelligenceUnityIntelligenceConvergenceContext {


request:

IntelligenceUnityIntelligenceConvergenceInput;


history:

IntelligenceUnityIntelligenceConvergenceRecord[];


}



export interface IntelligenceUnityIntelligenceConvergenceResult {


record:

IntelligenceUnityIntelligenceConvergenceRecord;


executionTime:number;


}



