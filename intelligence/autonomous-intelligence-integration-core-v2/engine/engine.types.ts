
import type {

AutonomousIntelligenceIntegrationCoreInput,

AutonomousIntelligenceIntegrationCoreRecord

} from "../contracts";



export interface AutonomousIntelligenceIntegrationCoreContext {


request:

AutonomousIntelligenceIntegrationCoreInput;


history:

AutonomousIntelligenceIntegrationCoreRecord[];


}



export interface AutonomousIntelligenceIntegrationCoreResult {


record:

AutonomousIntelligenceIntegrationCoreRecord;


executionTime:number;


}



