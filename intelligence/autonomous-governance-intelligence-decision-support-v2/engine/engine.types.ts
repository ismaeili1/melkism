
import type {

AutonomousGovernanceDecisionSupportInput,

AutonomousGovernanceDecisionSupportRecord

} from "../contracts";



export interface AutonomousGovernanceDecisionSupportContext {


request:

AutonomousGovernanceDecisionSupportInput;


history:

AutonomousGovernanceDecisionSupportRecord[];


}



export interface AutonomousGovernanceDecisionSupportResult {


record:

AutonomousGovernanceDecisionSupportRecord;


executionTime:number;


}



