
import type {

AutonomousStrategicMetaCognitionInput,

AutonomousStrategicMetaCognitionRecord

} from "../contracts";



export interface AutonomousStrategicMetaCognitionContext {


request:

AutonomousStrategicMetaCognitionInput;


history:

AutonomousStrategicMetaCognitionRecord[];


}



export interface AutonomousStrategicMetaCognitionResult {


record:

AutonomousStrategicMetaCognitionRecord;


executionTime:number;


}



