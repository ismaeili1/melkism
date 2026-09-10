
import {

evaluateAgent,
calculateScore,
generateFeedback

}
from "./intelligence.evaluation.engine";



export function reviewAgentPerformance(
data:any
){

return evaluateAgent(data);

}



export function getAgentScore(
agentId:string
){

return calculateScore(agentId);

}



export function resetEvaluation(){

return true;

}



export {

generateFeedback

};

