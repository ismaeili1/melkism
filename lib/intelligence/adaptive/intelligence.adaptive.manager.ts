
import {

adapt,
optimize,
evaluateAdaptation

}
from "./intelligence.adaptive.engine";


import {

getAdaptiveState,
clearAdaptiveState

}
from "./intelligence.adaptive.store";



export function updateAdaptiveState(
data:any
){

return adapt(data);

}



export function getCurrentAdaptiveState(){

return getAdaptiveState();

}



export function optimizeIntelligence(
data:any
){

return optimize(data);

}



export function evaluateIntelligenceAdaptation(
data:any
){

return evaluateAdaptation(data);

}



export function resetAdaptiveState(){

return clearAdaptiveState();

}


