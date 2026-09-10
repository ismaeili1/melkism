
import type {

AutonomousGovernanceFederationInput,

AutonomousGovernanceFederationRecord

} from "../contracts";



export interface AutonomousGovernanceFederationContext {


request:

AutonomousGovernanceFederationInput;


history:

AutonomousGovernanceFederationRecord[];


}



export interface AutonomousGovernanceFederationResult {


record:

AutonomousGovernanceFederationRecord;


executionTime:number;


}



