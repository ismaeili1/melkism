
import type {

AutonomousGovernanceStrategyInput,

AutonomousGovernanceStrategyRecord

} from "../contracts";



export interface AutonomousGovernanceStrategyContext {


request:

AutonomousGovernanceStrategyInput;


history:

AutonomousGovernanceStrategyRecord[];


}



export interface AutonomousGovernanceStrategyResult {


record:

AutonomousGovernanceStrategyRecord;


executionTime:number;


}



