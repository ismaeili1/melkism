
import type {

AutonomousGovernanceMetaInput,

AutonomousGovernanceMetaRecord

} from "../contracts";



export interface AutonomousGovernanceMetaContext {


request:

AutonomousGovernanceMetaInput;


history:

AutonomousGovernanceMetaRecord[];


}



export interface AutonomousGovernanceMetaResult {


record:

AutonomousGovernanceMetaRecord;


executionTime:number;


}



