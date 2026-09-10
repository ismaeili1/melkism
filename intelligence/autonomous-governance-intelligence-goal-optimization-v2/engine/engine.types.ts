
import type {

AutonomousGovernanceGoalOptimizationInput,

AutonomousGovernanceGoalOptimizationRecord

} from "../contracts";



export interface AutonomousGovernanceGoalOptimizationContext {


request:

AutonomousGovernanceGoalOptimizationInput;


history:

AutonomousGovernanceGoalOptimizationRecord[];


}



export interface AutonomousGovernanceGoalOptimizationResult {


record:

AutonomousGovernanceGoalOptimizationRecord;


executionTime:number;


}



