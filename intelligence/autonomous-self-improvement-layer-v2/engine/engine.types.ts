
import type {

AutonomousMetaSelfImprovementInput,

AutonomousMetaSelfImprovementRecord

} from "../contracts";



export interface AutonomousMetaSelfImprovementContext {


request:

AutonomousMetaSelfImprovementInput;


history:

AutonomousMetaSelfImprovementRecord[];


}



export interface AutonomousMetaSelfImprovementResult {


record:

AutonomousMetaSelfImprovementRecord;


executionTime:number;


}



