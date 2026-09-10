
import {

saveLearningRecord,
getAgentLearning

}
from "./intelligence.learning.store";



export function learnFromExperience(
data:any
){


return saveLearningRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

type:"experience",

...data

});


}



export function evaluateLearning(
agentId:string
){

return getAgentLearning(agentId);

}



export function generateInsight(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

