
import type {

AutonomousUniversalCrossDomainTransferInput,

AutonomousUniversalCrossDomainTransferRecord

} from "../contracts";



export interface AutonomousUniversalCrossDomainTransferContext {


request:

AutonomousUniversalCrossDomainTransferInput;


history:

AutonomousUniversalCrossDomainTransferRecord[];


}



export interface AutonomousUniversalCrossDomainTransferResult {


record:

AutonomousUniversalCrossDomainTransferRecord;


executionTime:number;


}



