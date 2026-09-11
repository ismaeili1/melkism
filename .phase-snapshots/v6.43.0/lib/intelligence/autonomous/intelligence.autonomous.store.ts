
import type {

IntelligenceAutonomousResult

}
from "./intelligence.autonomous.types";


const history:
IntelligenceAutonomousResult[]
=
[];


let status="idle";


export function saveAutonomousResult(
result:IntelligenceAutonomousResult
){

history.push(result);

return result;

}


export function getAutonomousHistory(){

return history;

}


export function getPipelineStatus(){

return status;

}


export function setPipelineStatus(
value:string
){

status=value;

}


export function clearAutonomousHistory(){

history.length=0;

}

