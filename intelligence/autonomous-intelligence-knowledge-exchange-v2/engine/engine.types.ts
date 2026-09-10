
import type {

AutonomousKnowledgeKnowledgeExchangeInput,

AutonomousKnowledgeKnowledgeExchangeRecord

} from "../contracts";



export interface AutonomousKnowledgeKnowledgeExchangeContext {


request:

AutonomousKnowledgeKnowledgeExchangeInput;


history:

AutonomousKnowledgeKnowledgeExchangeRecord[];


}



export interface AutonomousKnowledgeKnowledgeExchangeResult {


record:

AutonomousKnowledgeKnowledgeExchangeRecord;


executionTime:number;


}



