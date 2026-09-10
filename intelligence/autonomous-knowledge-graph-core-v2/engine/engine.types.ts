
import type {

AutonomousSemanticKnowledgeGraphInput,

AutonomousSemanticKnowledgeGraphRecord

} from "../contracts";



export interface AutonomousSemanticKnowledgeGraphContext {


request:

AutonomousSemanticKnowledgeGraphInput;


history:

AutonomousSemanticKnowledgeGraphRecord[];


}



export interface AutonomousSemanticKnowledgeGraphResult {


record:

AutonomousSemanticKnowledgeGraphRecord;


executionTime:number;


}



