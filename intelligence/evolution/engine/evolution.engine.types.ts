
import type {

EvolutionInputContract,
EvolutionRecordContract

} from "../contracts";



export interface EvolutionContext {

    request: EvolutionInputContract;

    history: EvolutionRecordContract[];

}



export interface EvolutionResult {

    record: EvolutionRecordContract;

    executionTime: number;

}


