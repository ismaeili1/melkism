
import type {

AutonomousMetaSelfEvolutionInput,

AutonomousMetaSelfEvolutionRecord

} from "../contracts";



export interface AutonomousMetaSelfEvolutionContext {


request:

AutonomousMetaSelfEvolutionInput;


history:

AutonomousMetaSelfEvolutionRecord[];


}



export interface AutonomousMetaSelfEvolutionResult {


record:

AutonomousMetaSelfEvolutionRecord;


executionTime:number;


}



