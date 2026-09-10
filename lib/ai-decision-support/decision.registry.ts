import type {
DecisionRequest
} from "./decision.types";


const requests:DecisionRequest[]=[];


export function registerDecision(
request:DecisionRequest
){

requests.push(request);

}


export function getDecisions(){

return [...requests];

}

