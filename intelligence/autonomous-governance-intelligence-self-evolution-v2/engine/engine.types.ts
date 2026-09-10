
import type {

AutonomousGovernanceSelfEvolutionInput,

AutonomousGovernanceSelfEvolutionRecord

} from "../contracts";



export interface AutonomousGovernanceSelfEvolutionContext {


request:

AutonomousGovernanceSelfEvolutionInput;


history:

AutonomousGovernanceSelfEvolutionRecord[];


}



export interface AutonomousGovernanceSelfEvolutionResult {


record:

AutonomousGovernanceSelfEvolutionRecord;


executionTime:number;


}



