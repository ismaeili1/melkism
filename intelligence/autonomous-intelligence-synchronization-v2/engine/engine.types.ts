
import type {

AutonomousIntelligenceSynchronizationInput,

AutonomousIntelligenceSynchronizationRecord

} from "../contracts";



export interface AutonomousIntelligenceSynchronizationContext {


request:

AutonomousIntelligenceSynchronizationInput;


history:

AutonomousIntelligenceSynchronizationRecord[];


}



export interface AutonomousIntelligenceSynchronizationResult {


record:

AutonomousIntelligenceSynchronizationRecord;


executionTime:number;


}



