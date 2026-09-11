
import {

makeDecision

}
from "./intelligence.decision.engine";


import {

getDecisions,
clearDecisions

}
from "./intelligence.decision.store";



export function decide(
request:any
){

return makeDecision(request);

}



export function listDecisions(){

return getDecisions();

}



export function resetDecisions(){

return clearDecisions();

}


