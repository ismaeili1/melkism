
import type {

AutonomousAGIMultiIntelligenceCoordinationInput,

AutonomousAGIMultiIntelligenceCoordinationRecord

} from "../contracts";



export interface AutonomousAGIMultiIntelligenceCoordinationContext {


request:

AutonomousAGIMultiIntelligenceCoordinationInput;


history:

AutonomousAGIMultiIntelligenceCoordinationRecord[];


}



export interface AutonomousAGIMultiIntelligenceCoordinationResult {


record:

AutonomousAGIMultiIntelligenceCoordinationRecord;


executionTime:number;


}



