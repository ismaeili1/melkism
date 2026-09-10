
import type {

GovernanceAutonomousEvolutionInput,

GovernanceAutonomousEvolutionRecord

} from "../contracts";



export interface GovernanceAutonomousEvolutionContext {


request:GovernanceAutonomousEvolutionInput;


history:GovernanceAutonomousEvolutionRecord[];


}



export interface GovernanceAutonomousEvolutionResult {


record:GovernanceAutonomousEvolutionRecord;


executionTime:number;


}



