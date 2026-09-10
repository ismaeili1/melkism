
import type {

AutonomousKnowledgeKnowledgeFabricInput,

AutonomousKnowledgeKnowledgeFabricRecord

} from "../contracts";



export interface AutonomousKnowledgeKnowledgeFabricContext {


request:

AutonomousKnowledgeKnowledgeFabricInput;


history:

AutonomousKnowledgeKnowledgeFabricRecord[];


}



export interface AutonomousKnowledgeKnowledgeFabricResult {


record:

AutonomousKnowledgeKnowledgeFabricRecord;


executionTime:number;


}



