
import type {

AutonomousGovernanceKnowledgeInput,

AutonomousGovernanceKnowledgeRecord

} from "../contracts";



export interface AutonomousGovernanceKnowledgeContext {


request:

AutonomousGovernanceKnowledgeInput;


history:

AutonomousGovernanceKnowledgeRecord[];


}



export interface AutonomousGovernanceKnowledgeResult {


record:

AutonomousGovernanceKnowledgeRecord;


executionTime:number;


}



