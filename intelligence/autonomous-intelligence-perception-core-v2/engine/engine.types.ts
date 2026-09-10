
import type {

AutonomousPerceptionPerceptionCoreInput,

AutonomousPerceptionPerceptionCoreRecord

} from "../contracts";



export interface AutonomousPerceptionPerceptionCoreContext {


request:

AutonomousPerceptionPerceptionCoreInput;


history:

AutonomousPerceptionPerceptionCoreRecord[];


}



export interface AutonomousPerceptionPerceptionCoreResult {


record:

AutonomousPerceptionPerceptionCoreRecord;


executionTime:number;


}



