
import type {

AutonomousMetaIntelligenceEvolutionLoopInput,

AutonomousMetaIntelligenceEvolutionLoopRecord

} from "../contracts";



export interface AutonomousMetaIntelligenceEvolutionLoopContext {


request:

AutonomousMetaIntelligenceEvolutionLoopInput;


history:

AutonomousMetaIntelligenceEvolutionLoopRecord[];


}



export interface AutonomousMetaIntelligenceEvolutionLoopResult {


record:

AutonomousMetaIntelligenceEvolutionLoopRecord;


executionTime:number;


}



