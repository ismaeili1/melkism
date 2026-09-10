
import type {

AutonomousMetaCognitiveEvolutionInput,

AutonomousMetaCognitiveEvolutionRecord

} from "../contracts";



export interface AutonomousMetaCognitiveEvolutionContext {


request:

AutonomousMetaCognitiveEvolutionInput;


history:

AutonomousMetaCognitiveEvolutionRecord[];


}



export interface AutonomousMetaCognitiveEvolutionResult {


record:

AutonomousMetaCognitiveEvolutionRecord;


executionTime:number;


}



