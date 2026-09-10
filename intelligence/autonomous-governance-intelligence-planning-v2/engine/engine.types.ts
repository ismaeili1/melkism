
import type {

AutonomousGovernancePlanningInput,

AutonomousGovernancePlanningRecord

} from "../contracts";



export interface AutonomousGovernancePlanningContext {


request:

AutonomousGovernancePlanningInput;


history:

AutonomousGovernancePlanningRecord[];


}



export interface AutonomousGovernancePlanningResult {


record:

AutonomousGovernancePlanningRecord;


executionTime:number;


}



