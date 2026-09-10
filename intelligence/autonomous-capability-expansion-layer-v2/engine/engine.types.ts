
import type {

AutonomousSelfCapabilityExpansionInput,

AutonomousSelfCapabilityExpansionRecord

} from "../contracts";



export interface AutonomousSelfCapabilityExpansionContext {


request:

AutonomousSelfCapabilityExpansionInput;


history:

AutonomousSelfCapabilityExpansionRecord[];


}



export interface AutonomousSelfCapabilityExpansionResult {


record:

AutonomousSelfCapabilityExpansionRecord;


executionTime:number;


}



