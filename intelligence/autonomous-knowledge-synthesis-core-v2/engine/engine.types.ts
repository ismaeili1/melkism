
import type {

AutonomousCreativeKnowledgeSynthesisInput,

AutonomousCreativeKnowledgeSynthesisRecord

} from "../contracts";



export interface AutonomousCreativeKnowledgeSynthesisContext {


request:

AutonomousCreativeKnowledgeSynthesisInput;


history:

AutonomousCreativeKnowledgeSynthesisRecord[];


}



export interface AutonomousCreativeKnowledgeSynthesisResult {


record:

AutonomousCreativeKnowledgeSynthesisRecord;


executionTime:number;


}



