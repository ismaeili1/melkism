
import type {

AutonomousCognitiveAdvancedReasoningInput,

AutonomousCognitiveAdvancedReasoningRecord

} from "../contracts";



export interface AutonomousCognitiveAdvancedReasoningContext {


request:

AutonomousCognitiveAdvancedReasoningInput;


history:

AutonomousCognitiveAdvancedReasoningRecord[];


}



export interface AutonomousCognitiveAdvancedReasoningResult {


record:

AutonomousCognitiveAdvancedReasoningRecord;


executionTime:number;


}



