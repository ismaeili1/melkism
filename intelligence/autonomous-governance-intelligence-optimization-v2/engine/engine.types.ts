
import type {

AutonomousGovernanceIntelligenceOptimizationInput,

AutonomousGovernanceIntelligenceOptimizationRecord

} from "../contracts";



export interface AutonomousGovernanceIntelligenceOptimizationContext {


request:AutonomousGovernanceIntelligenceOptimizationInput;


history:AutonomousGovernanceIntelligenceOptimizationRecord[];


}



export interface AutonomousGovernanceIntelligenceOptimizationResult {


record:AutonomousGovernanceIntelligenceOptimizationRecord;


executionTime:number;


}



