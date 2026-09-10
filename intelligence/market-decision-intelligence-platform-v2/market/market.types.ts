
import type {

MarketSignal,

MarketDataRequest,

MarketIntelligenceState

} from "../contracts";



export interface MarketExecutionContext {


signal:

MarketSignal;


request:

MarketDataRequest;


state:

MarketIntelligenceState;


}



export interface MarketExecutionResult {


status:string;


confidence:number;


executionTime:number;


}



