
import type {

AutonomousGovernanceFederationGovernanceInput,

AutonomousGovernanceFederationGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceFederationGovernanceContext {


request:

AutonomousGovernanceFederationGovernanceInput;


history:

AutonomousGovernanceFederationGovernanceRecord[];


}



export interface AutonomousGovernanceFederationGovernanceResult {


record:

AutonomousGovernanceFederationGovernanceRecord;


executionTime:number;


}



