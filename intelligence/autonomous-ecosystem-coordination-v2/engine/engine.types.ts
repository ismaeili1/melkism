
import type {

AutonomousEcosystemCoordinationInput,

AutonomousEcosystemCoordinationRecord

} from "../contracts";



export interface AutonomousEcosystemCoordinationContext {


request:

AutonomousEcosystemCoordinationInput;


history:

AutonomousEcosystemCoordinationRecord[];


}



export interface AutonomousEcosystemCoordinationResult {


record:

AutonomousEcosystemCoordinationRecord;


executionTime:number;


}



