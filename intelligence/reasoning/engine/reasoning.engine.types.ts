
import type {
    ReasoningInputContract,
    ReasoningOutputContract
} from "../contracts/reasoning.contracts";


export interface ReasoningEngineContext {

    request: ReasoningInputContract;

    memoryNodes: string[];

}


export interface ReasoningEngineResult {

    output: ReasoningOutputContract;

    executionTime: number;

}


