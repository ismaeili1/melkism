
import type {

AutonomousGovernanceStrategicPlanningInput,

AutonomousGovernanceStrategicPlanningRecord

} from "../contracts";



export interface AutonomousGovernanceStrategicPlanningContext {


request:

AutonomousGovernanceStrategicPlanningInput;


history:

AutonomousGovernanceStrategicPlanningRecord[];


}



export interface AutonomousGovernanceStrategicPlanningResult {


record:

AutonomousGovernanceStrategicPlanningRecord;


executionTime:number;


}



