
import type {

AutonomousSupremeGlobalSynchronizationInput,

AutonomousSupremeGlobalSynchronizationRecord

} from "../contracts";



export interface AutonomousSupremeGlobalSynchronizationContext {


request:

AutonomousSupremeGlobalSynchronizationInput;


history:

AutonomousSupremeGlobalSynchronizationRecord[];


}



export interface AutonomousSupremeGlobalSynchronizationResult {


record:

AutonomousSupremeGlobalSynchronizationRecord;


executionTime:number;


}



