
import type {

AutonomousGovernanceMultiAgentInput,

AutonomousGovernanceMultiAgentRecord

} from "../contracts";



export interface AutonomousGovernanceMultiAgentContext {


request:

AutonomousGovernanceMultiAgentInput;


history:

AutonomousGovernanceMultiAgentRecord[];


}



export interface AutonomousGovernanceMultiAgentResult {


record:

AutonomousGovernanceMultiAgentRecord;


executionTime:number;


}



