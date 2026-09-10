
import type {

AutonomousStrategicHigherOrderReasoningInput,

AutonomousStrategicHigherOrderReasoningRecord

} from "../contracts";



export interface AutonomousStrategicHigherOrderReasoningContext {


request:

AutonomousStrategicHigherOrderReasoningInput;


history:

AutonomousStrategicHigherOrderReasoningRecord[];


}



export interface AutonomousStrategicHigherOrderReasoningResult {


record:

AutonomousStrategicHigherOrderReasoningRecord;


executionTime:number;


}



