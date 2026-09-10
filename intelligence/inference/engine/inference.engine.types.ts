
import type {

InferenceInputContract,
InferenceOutputContract

} from "../contracts";



export interface InferenceContext {

    request: InferenceInputContract;

    reasoningTrace: string[];

}



export interface InferenceResult {

    output: InferenceOutputContract;

    executionTime: number;

}



