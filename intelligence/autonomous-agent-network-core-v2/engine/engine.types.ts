
import type {

AutonomousAgentAgentNetworkInput,

AutonomousAgentAgentNetworkRecord

} from "../contracts";



export interface AutonomousAgentAgentNetworkContext {


request:

AutonomousAgentAgentNetworkInput;


history:

AutonomousAgentAgentNetworkRecord[];


}



export interface AutonomousAgentAgentNetworkResult {


record:

AutonomousAgentAgentNetworkRecord;


executionTime:number;


}



