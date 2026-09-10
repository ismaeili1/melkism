
import type {

AutonomousDecisionDecisionIntelligenceInput,

AutonomousDecisionDecisionIntelligenceRecord

} from "../contracts";



export interface AutonomousDecisionDecisionIntelligenceContext {


request:

AutonomousDecisionDecisionIntelligenceInput;


history:

AutonomousDecisionDecisionIntelligenceRecord[];


}



export interface AutonomousDecisionDecisionIntelligenceResult {


record:

AutonomousDecisionDecisionIntelligenceRecord;


executionTime:number;


}



