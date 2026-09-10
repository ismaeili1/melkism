
import type {

AutonomousReasoningAdvancedReasoningInput,

AutonomousReasoningAdvancedReasoningRecord

} from "../contracts";



export interface AutonomousReasoningAdvancedReasoningContext {


request:

AutonomousReasoningAdvancedReasoningInput;


history:

AutonomousReasoningAdvancedReasoningRecord[];


}



export interface AutonomousReasoningAdvancedReasoningResult {


record:

AutonomousReasoningAdvancedReasoningRecord;


executionTime:number;


}



