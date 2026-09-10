
import type {

AutonomousGovernanceContinuousImprovementInput,

AutonomousGovernanceContinuousImprovementRecord

} from "../contracts";



export interface AutonomousGovernanceContinuousImprovementContext {


request:

AutonomousGovernanceContinuousImprovementInput;


history:

AutonomousGovernanceContinuousImprovementRecord[];


}



export interface AutonomousGovernanceContinuousImprovementResult {


record:

AutonomousGovernanceContinuousImprovementRecord;


executionTime:number;


}



