
import type {

AutonomousDecisionActionPlanningInput,

AutonomousDecisionActionPlanningRecord

} from "../contracts";



export interface AutonomousDecisionActionPlanningContext {


request:

AutonomousDecisionActionPlanningInput;


history:

AutonomousDecisionActionPlanningRecord[];


}



export interface AutonomousDecisionActionPlanningResult {


record:

AutonomousDecisionActionPlanningRecord;


executionTime:number;


}



