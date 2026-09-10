
import type {

AutonomousGovernanceStrategicGovernanceInput,

AutonomousGovernanceStrategicGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceStrategicGovernanceContext {


request:

AutonomousGovernanceStrategicGovernanceInput;


history:

AutonomousGovernanceStrategicGovernanceRecord[];


}



export interface AutonomousGovernanceStrategicGovernanceResult {


record:

AutonomousGovernanceStrategicGovernanceRecord;


executionTime:number;


}



