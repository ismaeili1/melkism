
import {
MemoryRecord,
LearningSignal,
ExperienceEvent
} from "../contracts";


export function processMemory(
record:MemoryRecord
){

return {

accepted:true,

id:record.id

};

}



export function processLearning(
signal:LearningSignal
){

return {

updated:true,

score:signal.score

};

}



export function processExperience(
event:ExperienceEvent
){

return {

stored:true,

event:event.event

};

}



