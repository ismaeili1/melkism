
import type {

AutonomousDecisionDecisionGovernanceInput,

AutonomousDecisionDecisionGovernanceRecord

} from "../contracts";



export interface AutonomousDecisionDecisionGovernanceContext {


request:

AutonomousDecisionDecisionGovernanceInput;


history:

AutonomousDecisionDecisionGovernanceRecord[];


}



export interface AutonomousDecisionDecisionGovernanceResult {


record:

AutonomousDecisionDecisionGovernanceRecord;


executionTime:number;


}



