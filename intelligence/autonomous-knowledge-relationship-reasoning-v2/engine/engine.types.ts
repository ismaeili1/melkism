
import type {

AutonomousSemanticRelationshipReasoningInput,

AutonomousSemanticRelationshipReasoningRecord

} from "../contracts";



export interface AutonomousSemanticRelationshipReasoningContext {


request:

AutonomousSemanticRelationshipReasoningInput;


history:

AutonomousSemanticRelationshipReasoningRecord[];


}



export interface AutonomousSemanticRelationshipReasoningResult {


record:

AutonomousSemanticRelationshipReasoningRecord;


executionTime:number;


}



