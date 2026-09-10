
import type {

AutonomousSupremeStrategicCommandInput,

AutonomousSupremeStrategicCommandRecord

} from "../contracts";



export interface AutonomousSupremeStrategicCommandContext {


request:

AutonomousSupremeStrategicCommandInput;


history:

AutonomousSupremeStrategicCommandRecord[];


}



export interface AutonomousSupremeStrategicCommandResult {


record:

AutonomousSupremeStrategicCommandRecord;


executionTime:number;


}



