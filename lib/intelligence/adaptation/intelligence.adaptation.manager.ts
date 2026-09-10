
import {

adaptAgent,
evaluateAdaptation,
applyOptimization

}
from "./intelligence.adaptation.engine";



export function optimizeAgent(
data:any
){

return adaptAgent(data);

}



export function reviewAdaptation(
agentId:string
){

return evaluateAdaptation(agentId);

}



export function resetAdaptation(){

return true;

}



export {

applyOptimization

};

