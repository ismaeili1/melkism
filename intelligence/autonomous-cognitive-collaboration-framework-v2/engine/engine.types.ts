
import type {

EcosystemCognitiveCollaborationInput,

EcosystemCognitiveCollaborationRecord

} from "../contracts";



export interface EcosystemCognitiveCollaborationContext {


request:

EcosystemCognitiveCollaborationInput;


history:

EcosystemCognitiveCollaborationRecord[];


}



export interface EcosystemCognitiveCollaborationResult {


record:

EcosystemCognitiveCollaborationRecord;


executionTime:number;


}



