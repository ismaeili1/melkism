
import type {

AutonomousPerceptionEnvironmentalAwarenessInput,

AutonomousPerceptionEnvironmentalAwarenessRecord

} from "../contracts";



export interface AutonomousPerceptionEnvironmentalAwarenessContext {


request:

AutonomousPerceptionEnvironmentalAwarenessInput;


history:

AutonomousPerceptionEnvironmentalAwarenessRecord[];


}



export interface AutonomousPerceptionEnvironmentalAwarenessResult {


record:

AutonomousPerceptionEnvironmentalAwarenessRecord;


executionTime:number;


}



