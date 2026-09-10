
import type {

AutonomousGovernanceKnowledgeGraphInput,

AutonomousGovernanceKnowledgeGraphRecord

} from "../contracts";



export interface AutonomousGovernanceKnowledgeGraphContext {


request:

AutonomousGovernanceKnowledgeGraphInput;


history:

AutonomousGovernanceKnowledgeGraphRecord[];


}



export interface AutonomousGovernanceKnowledgeGraphResult {


record:

AutonomousGovernanceKnowledgeGraphRecord;


executionTime:number;


}



