
import {

saveFeedback,
getAgentFeedback

}
from "./intelligence.feedback.store";



export function collectFeedback(
data:any
){

return saveFeedback({

id:crypto.randomUUID(),

createdAt:new Date(),

score:data.score ?? 0,

type:"success",

impact:null,

...data

});

}



export function analyzeFeedback(
agentId:string
){

return getAgentFeedback(agentId);

}



export function generateImprovement(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

