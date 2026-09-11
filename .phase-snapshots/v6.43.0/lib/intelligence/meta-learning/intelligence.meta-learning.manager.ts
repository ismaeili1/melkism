
import {

analyzeLearningPattern,
generateLearningStrategy,
optimizeLearningProcess

}
from "./intelligence.meta-learning.engine";



export function runMetaLearning(
data:any
){

return analyzeLearningPattern(data);

}



export function reviewMetaLearning(
agentId:string
){

return optimizeLearningProcess(agentId);

}



export function resetMetaLearning(){

return true;

}



export {

generateLearningStrategy

};

