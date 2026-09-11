import type {

DecisionResult

} from "../contracts/decision.types";


export function decisionGate(

result:DecisionResult

){

return result.status==="approved";

}

