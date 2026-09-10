
import type {

AutonomousAGIIntelligenceFabricInput,

AutonomousAGIIntelligenceFabricRecord

} from "../contracts";



export interface AutonomousAGIIntelligenceFabricContext {


request:

AutonomousAGIIntelligenceFabricInput;


history:

AutonomousAGIIntelligenceFabricRecord[];


}



export interface AutonomousAGIIntelligenceFabricResult {


record:

AutonomousAGIIntelligenceFabricRecord;


executionTime:number;


}



