
import type {

AutonomousStrategicFuturePlanningInput,

AutonomousStrategicFuturePlanningRecord

} from "../contracts";



export interface AutonomousStrategicFuturePlanningContext {


request:

AutonomousStrategicFuturePlanningInput;


history:

AutonomousStrategicFuturePlanningRecord[];


}



export interface AutonomousStrategicFuturePlanningResult {


record:

AutonomousStrategicFuturePlanningRecord;


executionTime:number;


}



