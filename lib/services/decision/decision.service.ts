import {
DecisionEngine
} from "./decision.engine";


import type {
DecisionInput
} from "./decision.types";


export class DecisionService {


private engine =
new DecisionEngine();



createDecision(
input:DecisionInput
){

return this.engine.evaluate(input);

}


}

