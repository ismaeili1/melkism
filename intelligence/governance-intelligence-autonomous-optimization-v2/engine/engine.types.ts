
import type {

GovernanceAutonomousOptimizationInput,

GovernanceAutonomousOptimizationRecord

} from "../contracts";



export interface GovernanceAutonomousOptimizationContext {


request:GovernanceAutonomousOptimizationInput;


history:GovernanceAutonomousOptimizationRecord[];


}



export interface GovernanceAutonomousOptimizationResult {


record:GovernanceAutonomousOptimizationRecord;


executionTime:number;


}



