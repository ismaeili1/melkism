
import type {

AutonomousEcosystemGovernanceInput,

AutonomousEcosystemGovernanceRecord

} from "../contracts";



export interface AutonomousEcosystemGovernanceContext {


request:

AutonomousEcosystemGovernanceInput;


history:

AutonomousEcosystemGovernanceRecord[];


}



export interface AutonomousEcosystemGovernanceResult {


record:

AutonomousEcosystemGovernanceRecord;


executionTime:number;


}



