
import type {

GovernanceEvolutionIntelligenceGovernanceInput,

GovernanceEvolutionIntelligenceGovernanceRecord

} from "../contracts";



export interface GovernanceEvolutionIntelligenceGovernanceContext {


request:GovernanceEvolutionIntelligenceGovernanceInput;


history:GovernanceEvolutionIntelligenceGovernanceRecord[];


}



export interface GovernanceEvolutionIntelligenceGovernanceResult {


record:GovernanceEvolutionIntelligenceGovernanceRecord;


executionTime:number;


}



