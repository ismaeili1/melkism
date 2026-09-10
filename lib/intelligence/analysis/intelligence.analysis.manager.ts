
import {

runAnalysis

}
from "./intelligence.analysis.engine";


import {

getInsights,
clearInsights

}
from "./intelligence.analysis.store";



export function analyze(
request:any
){

return runAnalysis(request);

}



export function listInsights(){

return getInsights();

}



export function resetInsights(){

return clearInsights();

}



