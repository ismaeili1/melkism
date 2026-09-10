
import type {

AutonomousGovernanceEvaluationInput,

AutonomousGovernanceEvaluationRecord

} from "../contracts";



export interface AutonomousGovernanceEvaluationContext {


request:

AutonomousGovernanceEvaluationInput;


history:

AutonomousGovernanceEvaluationRecord[];


}



export interface AutonomousGovernanceEvaluationResult {


record:

AutonomousGovernanceEvaluationRecord;


executionTime:number;


}



