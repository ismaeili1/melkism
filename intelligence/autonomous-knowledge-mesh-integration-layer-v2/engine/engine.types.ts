
import type {

AutonomousMeshKnowledgeMeshIntegrationInput,

AutonomousMeshKnowledgeMeshIntegrationRecord

} from "../contracts";



export interface AutonomousMeshKnowledgeMeshIntegrationContext {


request:

AutonomousMeshKnowledgeMeshIntegrationInput;


history:

AutonomousMeshKnowledgeMeshIntegrationRecord[];


}



export interface AutonomousMeshKnowledgeMeshIntegrationResult {


record:

AutonomousMeshKnowledgeMeshIntegrationRecord;


executionTime:number;


}



