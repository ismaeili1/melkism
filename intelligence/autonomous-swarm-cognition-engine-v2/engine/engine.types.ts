
import type {

AutonomousCollectiveSwarmCognitionInput,

AutonomousCollectiveSwarmCognitionRecord

} from "../contracts";



export interface AutonomousCollectiveSwarmCognitionContext {


request:

AutonomousCollectiveSwarmCognitionInput;


history:

AutonomousCollectiveSwarmCognitionRecord[];


}



export interface AutonomousCollectiveSwarmCognitionResult {


record:

AutonomousCollectiveSwarmCognitionRecord;


executionTime:number;


}



