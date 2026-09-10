
import type {

AutonomousGovernanceMonitoringInput,

AutonomousGovernanceMonitoringRecord

} from "../contracts";



export interface AutonomousGovernanceMonitoringContext {


request:

AutonomousGovernanceMonitoringInput;


history:

AutonomousGovernanceMonitoringRecord[];


}



export interface AutonomousGovernanceMonitoringResult {


record:

AutonomousGovernanceMonitoringRecord;


executionTime:number;


}



