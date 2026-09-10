
import type {

AutonomousFabricKnowledgeRoutingInput,

AutonomousFabricKnowledgeRoutingRecord

} from "../contracts";



export interface AutonomousFabricKnowledgeRoutingContext {


request:

AutonomousFabricKnowledgeRoutingInput;


history:

AutonomousFabricKnowledgeRoutingRecord[];


}



export interface AutonomousFabricKnowledgeRoutingResult {


record:

AutonomousFabricKnowledgeRoutingRecord;


executionTime:number;


}



