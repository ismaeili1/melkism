
import type {

AdaptiveEvolutionInputContract,
AdaptiveEvolutionRecordContract

} from "../contracts";



export interface AdaptiveEvolutionContext {

    request: AdaptiveEvolutionInputContract;

    history: AdaptiveEvolutionRecordContract[];

}



export interface AdaptiveEvolutionResult {

    record: AdaptiveEvolutionRecordContract;

    executionTime: number;

}


