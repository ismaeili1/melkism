
import type {

IntelligenceAdaptiveState

}
from "./intelligence.adaptive.types";


let currentState:
IntelligenceAdaptiveState | null
=
null;



export function saveAdaptiveState(
state:IntelligenceAdaptiveState
){

currentState=state;

return state;

}



export function getAdaptiveState(){

return currentState;

}



export function clearAdaptiveState(){

currentState=null;

}


