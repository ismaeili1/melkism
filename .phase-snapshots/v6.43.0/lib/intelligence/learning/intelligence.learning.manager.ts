
import {

learnFromExperience,
evaluateLearning,
generateInsight

}
from "./intelligence.learning.engine";



export function trainAgent(
data:any
){

return learnFromExperience(data);

}



export function reviewAgentLearning(
agentId:string
){

return evaluateLearning(agentId);

}



export function resetAgentLearning(){

return true;

}



export {

generateInsight

};

