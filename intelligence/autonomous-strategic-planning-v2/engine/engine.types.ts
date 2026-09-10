
import type {

AutonomousDecisionStrategicPlanningInput,

AutonomousDecisionStrategicPlanningRecord

} from "../contracts";



export interface AutonomousDecisionStrategicPlanningContext {


request:

AutonomousDecisionStrategicPlanningInput;


history:

AutonomousDecisionStrategicPlanningRecord[];


}



export interface AutonomousDecisionStrategicPlanningResult {


record:

AutonomousDecisionStrategicPlanningRecord;


executionTime:number;


}



