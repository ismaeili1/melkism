
import type {

AutonomousKnowledgeMemoryFabricInput,

AutonomousKnowledgeMemoryFabricRecord

} from "../contracts";



export interface AutonomousKnowledgeMemoryFabricContext {


request:

AutonomousKnowledgeMemoryFabricInput;


history:

AutonomousKnowledgeMemoryFabricRecord[];


}



export interface AutonomousKnowledgeMemoryFabricResult {


record:

AutonomousKnowledgeMemoryFabricRecord;


executionTime:number;


}



