
import type {

AutonomousGovernanceSemanticInput,

AutonomousGovernanceSemanticRecord

} from "../contracts";



export interface AutonomousGovernanceSemanticContext {


request:

AutonomousGovernanceSemanticInput;


history:

AutonomousGovernanceSemanticRecord[];


}



export interface AutonomousGovernanceSemanticResult {


record:

AutonomousGovernanceSemanticRecord;


executionTime:number;


}



