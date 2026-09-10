
import {

collectFeedback,
analyzeFeedback,
generateImprovement

}
from "./intelligence.feedback.engine";



export function processAgentFeedback(
data:any
){

return collectFeedback(data);

}



export function reviewFeedback(
agentId:string
){

return analyzeFeedback(agentId);

}



export function resetFeedback(){

return true;

}



export {

generateImprovement

};

