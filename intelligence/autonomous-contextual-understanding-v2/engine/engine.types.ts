
import type {

AutonomousCognitiveContextualUnderstandingInput,

AutonomousCognitiveContextualUnderstandingRecord

} from "../contracts";



export interface AutonomousCognitiveContextualUnderstandingContext {


request:

AutonomousCognitiveContextualUnderstandingInput;


history:

AutonomousCognitiveContextualUnderstandingRecord[];


}



export interface AutonomousCognitiveContextualUnderstandingResult {


record:

AutonomousCognitiveContextualUnderstandingRecord;


executionTime:number;


}



