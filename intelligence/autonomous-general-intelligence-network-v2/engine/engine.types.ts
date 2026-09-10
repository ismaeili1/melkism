
import type {

AGIGeneralIntelligenceNetworkInput,

AGIGeneralIntelligenceNetworkRecord

} from "../contracts";



export interface AGIGeneralIntelligenceNetworkContext {


request:

AGIGeneralIntelligenceNetworkInput;


history:

AGIGeneralIntelligenceNetworkRecord[];


}



export interface AGIGeneralIntelligenceNetworkResult {


record:

AGIGeneralIntelligenceNetworkRecord;


executionTime:number;


}



