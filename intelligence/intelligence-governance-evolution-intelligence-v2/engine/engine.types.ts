
import type {

IntelligenceGovernanceEvolutionIntelligenceInput,

IntelligenceGovernanceEvolutionIntelligenceRecord

} from "../contracts";



export interface GovernanceEvolutionIntelligenceContext {


request:IntelligenceGovernanceEvolutionIntelligenceInput;


history:IntelligenceGovernanceEvolutionIntelligenceRecord[];


}



export interface GovernanceEvolutionIntelligenceResult {


record:IntelligenceGovernanceEvolutionIntelligenceRecord;


executionTime:number;


}



