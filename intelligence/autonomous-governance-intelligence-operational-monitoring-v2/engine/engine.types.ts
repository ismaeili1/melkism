
import type {

AutonomousGovernanceOperationalMonitoringInput,

AutonomousGovernanceOperationalMonitoringRecord

} from "../contracts";



export interface AutonomousGovernanceOperationalMonitoringContext {


request:

AutonomousGovernanceOperationalMonitoringInput;


history:

AutonomousGovernanceOperationalMonitoringRecord[];


}



export interface AutonomousGovernanceOperationalMonitoringResult {


record:

AutonomousGovernanceOperationalMonitoringRecord;


executionTime:number;


}



