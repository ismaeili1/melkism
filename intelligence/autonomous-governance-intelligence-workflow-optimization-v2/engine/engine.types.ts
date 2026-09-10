
import type {

AutonomousGovernanceWorkflowOptimizationInput,

AutonomousGovernanceWorkflowOptimizationRecord

} from "../contracts";



export interface AutonomousGovernanceWorkflowOptimizationContext {


request:

AutonomousGovernanceWorkflowOptimizationInput;


history:

AutonomousGovernanceWorkflowOptimizationRecord[];


}



export interface AutonomousGovernanceWorkflowOptimizationResult {


record:

AutonomousGovernanceWorkflowOptimizationRecord;


executionTime:number;


}



