
import type {

IntelligenceGovernanceEvolutionInput,

IntelligenceGovernanceEvolutionRecord

} from "../contracts";



export interface IntelligenceGovernanceEvolutionContext {


request:IntelligenceGovernanceEvolutionInput;


history:IntelligenceGovernanceEvolutionRecord[];


}



export interface IntelligenceGovernanceEvolutionResult {


record:IntelligenceGovernanceEvolutionRecord;


executionTime:number;


}


