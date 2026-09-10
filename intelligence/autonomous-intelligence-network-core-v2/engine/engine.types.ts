
import type {

AutonomousKnowledgeNetworkCoreInput,

AutonomousKnowledgeNetworkCoreRecord

} from "../contracts";



export interface AutonomousKnowledgeNetworkCoreContext {


request:

AutonomousKnowledgeNetworkCoreInput;


history:

AutonomousKnowledgeNetworkCoreRecord[];


}



export interface AutonomousKnowledgeNetworkCoreResult {


record:

AutonomousKnowledgeNetworkCoreRecord;


executionTime:number;


}



