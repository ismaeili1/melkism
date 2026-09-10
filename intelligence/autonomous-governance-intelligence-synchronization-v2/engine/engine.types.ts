
import type {

AutonomousGovernanceSynchronizationInput,

AutonomousGovernanceSynchronizationRecord

} from "../contracts";



export interface AutonomousGovernanceSynchronizationContext {


request:

AutonomousGovernanceSynchronizationInput;


history:

AutonomousGovernanceSynchronizationRecord[];


}



export interface AutonomousGovernanceSynchronizationResult {


record:

AutonomousGovernanceSynchronizationRecord;


executionTime:number;


}



