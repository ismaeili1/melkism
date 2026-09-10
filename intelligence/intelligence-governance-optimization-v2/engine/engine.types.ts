
import type {

IntelligenceGovernanceOptimizationInput,

IntelligenceGovernanceOptimizationRecord

} from "../contracts";



export interface IntelligenceGovernanceOptimizationContext {


request:IntelligenceGovernanceOptimizationInput;


history:IntelligenceGovernanceOptimizationRecord[];


}



export interface IntelligenceGovernanceOptimizationResult {


record:IntelligenceGovernanceOptimizationRecord;


executionTime:number;


}


