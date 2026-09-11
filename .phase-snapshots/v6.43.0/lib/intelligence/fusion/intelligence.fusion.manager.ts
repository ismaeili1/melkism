
import {

fuseKnowledge

}
from "./intelligence.fusion.engine";


import {

getFusionHistory,
clearFusionHistory

}
from "./intelligence.fusion.store";



export function runFusion(
request:any
){

return fuseKnowledge(request);

}



export function listFusionHistory(){

return getFusionHistory();

}



export function resetFusionHistory(){

return clearFusionHistory();

}

