
import type {

AutonomousGovernanceLifecycleInput,

AutonomousGovernanceLifecycleRecord

} from "../contracts";



export interface AutonomousGovernanceLifecycleContext {


request:

AutonomousGovernanceLifecycleInput;


history:

AutonomousGovernanceLifecycleRecord[];


}



export interface AutonomousGovernanceLifecycleResult {


record:

AutonomousGovernanceLifecycleRecord;


executionTime:number;


}



