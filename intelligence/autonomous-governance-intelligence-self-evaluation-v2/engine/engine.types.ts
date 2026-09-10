
import type {

AutonomousGovernanceSelfEvaluationInput,

AutonomousGovernanceSelfEvaluationRecord

} from "../contracts";



export interface AutonomousGovernanceSelfEvaluationContext {


request:

AutonomousGovernanceSelfEvaluationInput;


history:

AutonomousGovernanceSelfEvaluationRecord[];


}



export interface AutonomousGovernanceSelfEvaluationResult {


record:

AutonomousGovernanceSelfEvaluationRecord;


executionTime:number;


}



