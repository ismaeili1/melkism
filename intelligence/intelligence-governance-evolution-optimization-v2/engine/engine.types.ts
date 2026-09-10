
import type {

IntelligenceGovernanceEvolutionOptimizationInput,

IntelligenceGovernanceEvolutionOptimizationRecord

} from "../contracts";



export interface GovernanceEvolutionOptimizationContext {


request:IntelligenceGovernanceEvolutionOptimizationInput;


history:IntelligenceGovernanceEvolutionOptimizationRecord[];


}



export interface GovernanceEvolutionOptimizationResult {


record:IntelligenceGovernanceEvolutionOptimizationRecord;


executionTime:number;


}



