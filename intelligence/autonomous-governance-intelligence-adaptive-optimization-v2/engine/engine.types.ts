
import type {

AutonomousGovernanceAdaptiveOptimizationInput,

AutonomousGovernanceAdaptiveOptimizationRecord

} from "../contracts";



export interface AutonomousGovernanceAdaptiveOptimizationContext {


request:

AutonomousGovernanceAdaptiveOptimizationInput;


history:

AutonomousGovernanceAdaptiveOptimizationRecord[];


}



export interface AutonomousGovernanceAdaptiveOptimizationResult {


record:

AutonomousGovernanceAdaptiveOptimizationRecord;


executionTime:number;


}



