
import {

analyzeImprovement,
generateImprovementPlan,
applyImprovement

}
from "./intelligence.self-improvement.engine";



export function runSelfImprovement(
data:any
){

return analyzeImprovement(data);

}



export function reviewSelfImprovement(
agentId:string
){

return applyImprovement(agentId);

}



export function resetSelfImprovement(){

return true;

}



export {

generateImprovementPlan

};

