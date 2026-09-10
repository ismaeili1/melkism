
import type {

AutonomousCognitiveCognitiveWorkflowInput,

AutonomousCognitiveCognitiveWorkflowRecord

} from "../contracts";



export interface AutonomousCognitiveCognitiveWorkflowContext {


request:

AutonomousCognitiveCognitiveWorkflowInput;


history:

AutonomousCognitiveCognitiveWorkflowRecord[];


}



export interface AutonomousCognitiveCognitiveWorkflowResult {


record:

AutonomousCognitiveCognitiveWorkflowRecord;


executionTime:number;


}



