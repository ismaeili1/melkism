
import type {

DecisionResult

}
from "./intelligence.decision.types";


const decisions:
DecisionResult[]
=
[];



export function saveDecision(
decision:DecisionResult
){

decisions.push(decision);

return decision;

}



export function getDecisions(){

return decisions;

}



export function clearDecisions(){

decisions.length=0;

}


