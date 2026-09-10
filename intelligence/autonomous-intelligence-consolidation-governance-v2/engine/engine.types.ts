
import type {

AutonomousIntelligenceConsolidationGovernanceInput,

AutonomousIntelligenceConsolidationGovernanceRecord

} from "../contracts";



export interface AutonomousIntelligenceConsolidationGovernanceContext {


request:

AutonomousIntelligenceConsolidationGovernanceInput;


history:

AutonomousIntelligenceConsolidationGovernanceRecord[];


}



export interface AutonomousIntelligenceConsolidationGovernanceResult {


record:

AutonomousIntelligenceConsolidationGovernanceRecord;


executionTime:number;


}



