
import type {

SuperEcosystemInput,

SuperEcosystemRecord

} from "../contracts";



export interface SuperEcosystemContext {


request:

SuperEcosystemInput;


history:

SuperEcosystemRecord[];


}



export interface SuperEcosystemResult {


record:

SuperEcosystemRecord;


executionTime:number;


}



