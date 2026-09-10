
import type {

AgentInput,

AgentExecutionRecord

} from "../contracts";



export interface AgentContext {


request:

AgentInput;


memory:

string[];


}




export interface AgentResult {


record:

AgentExecutionRecord;


executionTime:number;


}



