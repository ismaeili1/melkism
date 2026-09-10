
import type {

AutonomousCognitiveReasoningCoreInput,

AutonomousCognitiveReasoningCoreRecord

} from "../contracts";



export interface AutonomousCognitiveReasoningCoreContext {


request:

AutonomousCognitiveReasoningCoreInput;


history:

AutonomousCognitiveReasoningCoreRecord[];


}



export interface AutonomousCognitiveReasoningCoreResult {


record:

AutonomousCognitiveReasoningCoreRecord;


executionTime:number;


}



