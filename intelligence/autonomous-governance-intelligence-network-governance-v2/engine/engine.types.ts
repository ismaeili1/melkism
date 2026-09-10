
import type {

AutonomousGovernanceNetworkGovernanceInput,

AutonomousGovernanceNetworkGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceNetworkGovernanceContext {


request:

AutonomousGovernanceNetworkGovernanceInput;


history:

AutonomousGovernanceNetworkGovernanceRecord[];


}



export interface AutonomousGovernanceNetworkGovernanceResult {


record:

AutonomousGovernanceNetworkGovernanceRecord;


executionTime:number;


}



