
import type {

AutonomousKnowledgeKnowledgeGovernanceInput,

AutonomousKnowledgeKnowledgeGovernanceRecord

} from "../contracts";



export interface AutonomousKnowledgeKnowledgeGovernanceContext {


request:

AutonomousKnowledgeKnowledgeGovernanceInput;


history:

AutonomousKnowledgeKnowledgeGovernanceRecord[];


}



export interface AutonomousKnowledgeKnowledgeGovernanceResult {


record:

AutonomousKnowledgeKnowledgeGovernanceRecord;


executionTime:number;


}



