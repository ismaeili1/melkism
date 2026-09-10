
import {

reasonAbout,
generateHypothesis,
evaluateReasoning

}
from "./intelligence.reasoning.engine";



export function runReasoning(
data:any
){

return reasonAbout(data);

}



export function reviewReasoning(
agentId:string
){

return evaluateReasoning(agentId);

}



export function resetReasoning(){

return true;

}



export {

generateHypothesis

};

