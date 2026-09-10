
import type {

AGIAGIGovernanceInput,

AGIAGIGovernanceRecord

} from "../contracts";



export interface AGIAGIGovernanceContext {


request:

AGIAGIGovernanceInput;


history:

AGIAGIGovernanceRecord[];


}



export interface AGIAGIGovernanceResult {


record:

AGIAGIGovernanceRecord;


executionTime:number;


}



