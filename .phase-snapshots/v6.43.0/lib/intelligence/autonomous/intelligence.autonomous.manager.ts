
import {

executeAutonomousPipeline,
pausePipeline,
resumePipeline

}
from "./intelligence.autonomous.engine";


import {

getPipelineStatus,
getAutonomousHistory,
clearAutonomousHistory

}
from "./intelligence.autonomous.store";



export function runAutonomousTask(
task:any
){

return executeAutonomousPipeline(task);

}



export function getStatus(){

return getPipelineStatus();

}



export function pause(){

return pausePipeline();

}



export function resume(){

return resumePipeline();

}



export function getHistory(){

return getAutonomousHistory();

}



export function resetPipeline(){

return clearAutonomousHistory();

}

