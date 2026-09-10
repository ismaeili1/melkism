
import type {

AutonomousSelfContinuousImprovementInput,

AutonomousSelfContinuousImprovementRecord

} from "../contracts";



export interface AutonomousSelfContinuousImprovementContext {


request:

AutonomousSelfContinuousImprovementInput;


history:

AutonomousSelfContinuousImprovementRecord[];


}



export interface AutonomousSelfContinuousImprovementResult {


record:

AutonomousSelfContinuousImprovementRecord;


executionTime:number;


}



