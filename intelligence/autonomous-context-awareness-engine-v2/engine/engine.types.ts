
import type {

AutonomousCognitiveContextAwarenessInput,

AutonomousCognitiveContextAwarenessRecord

} from "../contracts";



export interface AutonomousCognitiveContextAwarenessContext {


request:

AutonomousCognitiveContextAwarenessInput;


history:

AutonomousCognitiveContextAwarenessRecord[];


}



export interface AutonomousCognitiveContextAwarenessResult {


record:

AutonomousCognitiveContextAwarenessRecord;


executionTime:number;


}



