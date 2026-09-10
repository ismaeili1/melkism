
import type {

AutonomousGovernanceMetaGovernanceInput,

AutonomousGovernanceMetaGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceMetaGovernanceContext {


request:

AutonomousGovernanceMetaGovernanceInput;


history:

AutonomousGovernanceMetaGovernanceRecord[];


}



export interface AutonomousGovernanceMetaGovernanceResult {


record:

AutonomousGovernanceMetaGovernanceRecord;


executionTime:number;


}



