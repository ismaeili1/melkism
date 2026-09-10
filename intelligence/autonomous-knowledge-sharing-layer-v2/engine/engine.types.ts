
import type {

AutonomousCollectiveKnowledgeSharingInput,

AutonomousCollectiveKnowledgeSharingRecord

} from "../contracts";



export interface AutonomousCollectiveKnowledgeSharingContext {


request:

AutonomousCollectiveKnowledgeSharingInput;


history:

AutonomousCollectiveKnowledgeSharingRecord[];


}



export interface AutonomousCollectiveKnowledgeSharingResult {


record:

AutonomousCollectiveKnowledgeSharingRecord;


executionTime:number;


}



