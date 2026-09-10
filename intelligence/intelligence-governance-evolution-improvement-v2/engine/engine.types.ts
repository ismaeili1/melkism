
import type {

IntelligenceGovernanceEvolutionImprovementInput,

IntelligenceGovernanceEvolutionImprovementRecord

} from "../contracts";



export interface GovernanceEvolutionImprovementContext {


request:IntelligenceGovernanceEvolutionImprovementInput;


history:IntelligenceGovernanceEvolutionImprovementRecord[];


}



export interface GovernanceEvolutionImprovementResult {


record:IntelligenceGovernanceEvolutionImprovementRecord;


executionTime:number;


}



