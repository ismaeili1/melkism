
import type {

AutonomousGovernanceAutonomyInput,

AutonomousGovernanceAutonomyRecord

} from "../contracts";



export interface AutonomousGovernanceAutonomyContext {


request:

AutonomousGovernanceAutonomyInput;


history:

AutonomousGovernanceAutonomyRecord[];


}



export interface AutonomousGovernanceAutonomyResult {


record:

AutonomousGovernanceAutonomyRecord;


executionTime:number;


}



