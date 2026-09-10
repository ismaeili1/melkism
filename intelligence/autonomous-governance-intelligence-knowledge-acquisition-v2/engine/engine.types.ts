
import type {

AutonomousGovernanceKnowledgeAcquisitionInput,

AutonomousGovernanceKnowledgeAcquisitionRecord

} from "../contracts";



export interface AutonomousGovernanceKnowledgeAcquisitionContext {


request:

AutonomousGovernanceKnowledgeAcquisitionInput;


history:

AutonomousGovernanceKnowledgeAcquisitionRecord[];


}



export interface AutonomousGovernanceKnowledgeAcquisitionResult {


record:

AutonomousGovernanceKnowledgeAcquisitionRecord;


executionTime:number;


}



