
import type {

IntelligenceNode,

NetworkMessage,

FederationState

} from "../contracts";



export interface NetworkExecutionContext {


node:

IntelligenceNode;


message:

NetworkMessage;


federation:

FederationState;


}



export interface NetworkExecutionResult {


status:string;


executionTime:number;


}



