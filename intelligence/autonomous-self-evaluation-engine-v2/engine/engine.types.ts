
import type {

AutonomousConsciousnessSelfEvaluationInput,

AutonomousConsciousnessSelfEvaluationRecord

} from "../contracts";



export interface AutonomousConsciousnessSelfEvaluationContext {


request:

AutonomousConsciousnessSelfEvaluationInput;


history:

AutonomousConsciousnessSelfEvaluationRecord[];


}



export interface AutonomousConsciousnessSelfEvaluationResult {


record:

AutonomousConsciousnessSelfEvaluationRecord;


executionTime:number;


}



