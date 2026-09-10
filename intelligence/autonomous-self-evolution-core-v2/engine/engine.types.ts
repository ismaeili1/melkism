
import type {

AutonomousEvolutionSelfEvolutionInput,

AutonomousEvolutionSelfEvolutionRecord

} from "../contracts";



export interface AutonomousEvolutionSelfEvolutionContext {


request:

AutonomousEvolutionSelfEvolutionInput;


history:

AutonomousEvolutionSelfEvolutionRecord[];


}



export interface AutonomousEvolutionSelfEvolutionResult {


record:

AutonomousEvolutionSelfEvolutionRecord;


executionTime:number;


}



