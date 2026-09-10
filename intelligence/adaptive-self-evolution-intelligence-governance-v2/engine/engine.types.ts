
import type {

AdaptiveSelfEvolutionIntelligenceGovernanceInput,

AdaptiveSelfEvolutionIntelligenceGovernanceRecord

} from "../contracts";


export interface AdaptiveSelfEvolutionIntelligenceGovernanceContext {


request:AdaptiveSelfEvolutionIntelligenceGovernanceInput;


history:AdaptiveSelfEvolutionIntelligenceGovernanceRecord[];

}



export interface AdaptiveSelfEvolutionIntelligenceGovernanceResult {


record:AdaptiveSelfEvolutionIntelligenceGovernanceRecord;


executionTime:number;


}

