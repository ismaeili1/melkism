
import type {

IntelligenceGovernanceEvolutionLearningInput,

IntelligenceGovernanceEvolutionLearningRecord

} from "../contracts";



export interface GovernanceEvolutionLearningContext {


request:IntelligenceGovernanceEvolutionLearningInput;


history:IntelligenceGovernanceEvolutionLearningRecord[];


}



export interface GovernanceEvolutionLearningResult {


record:IntelligenceGovernanceEvolutionLearningRecord;


executionTime:number;


}



