
import type {

AgentMessage,

AgentNetworkRecord

} from "../contracts";



export interface NetworkContext {


message:

AgentMessage;


history:

AgentNetworkRecord[];


}



export interface NetworkExecutionResult {


record:

AgentNetworkRecord;


executionTime:number;


}



