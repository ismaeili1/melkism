
import type {

KnowledgeFusionResult

}
from "./intelligence.fusion.types";


const history:
KnowledgeFusionResult[]
=
[];



export function saveFusionResult(
result:KnowledgeFusionResult
){

history.push(result);

return result;

}



export function getFusionHistory(){

return history;

}



export function clearFusionHistory(){

history.length=0;

}

