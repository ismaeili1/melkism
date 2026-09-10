
import type {

AutonomousGovernancePolicyOptimizationInput,

AutonomousGovernancePolicyOptimizationRecord

} from "../contracts";



export interface AutonomousGovernancePolicyOptimizationContext {


request:

AutonomousGovernancePolicyOptimizationInput;


history:

AutonomousGovernancePolicyOptimizationRecord[];


}



export interface AutonomousGovernancePolicyOptimizationResult {


record:

AutonomousGovernancePolicyOptimizationRecord;


executionTime:number;


}



