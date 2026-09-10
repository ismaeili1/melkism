
import type {

AutonomousKnowledgeKnowledgeCoreInput,

AutonomousKnowledgeKnowledgeCoreRecord

} from "../contracts";



export interface AutonomousKnowledgeKnowledgeCoreContext {


request:

AutonomousKnowledgeKnowledgeCoreInput;


history:

AutonomousKnowledgeKnowledgeCoreRecord[];


}



export interface AutonomousKnowledgeKnowledgeCoreResult {


record:

AutonomousKnowledgeKnowledgeCoreRecord;


executionTime:number;


}



