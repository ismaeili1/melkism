
import type {

AutonomousAGIUnifiedIntelligenceGovernanceInput,

AutonomousAGIUnifiedIntelligenceGovernanceRecord

} from "../contracts";



export interface AutonomousAGIUnifiedIntelligenceGovernanceContext {


request:

AutonomousAGIUnifiedIntelligenceGovernanceInput;


history:

AutonomousAGIUnifiedIntelligenceGovernanceRecord[];


}



export interface AutonomousAGIUnifiedIntelligenceGovernanceResult {


record:

AutonomousAGIUnifiedIntelligenceGovernanceRecord;


executionTime:number;


}



