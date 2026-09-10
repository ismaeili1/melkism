
import type {

AutonomousPerceptionPerceptionInput,

AutonomousPerceptionPerceptionRecord

} from "../contracts";



export interface AutonomousPerceptionPerceptionContext {


request:

AutonomousPerceptionPerceptionInput;


history:

AutonomousPerceptionPerceptionRecord[];


}



export interface AutonomousPerceptionPerceptionResult {


record:

AutonomousPerceptionPerceptionRecord;


executionTime:number;


}



