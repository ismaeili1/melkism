
import type {

AutonomousCollectiveDistributedKnowledgeInput,

AutonomousCollectiveDistributedKnowledgeRecord

} from "../contracts";



export interface AutonomousCollectiveDistributedKnowledgeContext {


request:

AutonomousCollectiveDistributedKnowledgeInput;


history:

AutonomousCollectiveDistributedKnowledgeRecord[];


}



export interface AutonomousCollectiveDistributedKnowledgeResult {


record:

AutonomousCollectiveDistributedKnowledgeRecord;


executionTime:number;


}



