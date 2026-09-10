
import type {

AutonomousPerceptionPerceptionGovernanceInput,

AutonomousPerceptionPerceptionGovernanceRecord

} from "../contracts";



export interface AutonomousPerceptionPerceptionGovernanceContext {


request:

AutonomousPerceptionPerceptionGovernanceInput;


history:

AutonomousPerceptionPerceptionGovernanceRecord[];


}



export interface AutonomousPerceptionPerceptionGovernanceResult {


record:

AutonomousPerceptionPerceptionGovernanceRecord;


executionTime:number;


}



