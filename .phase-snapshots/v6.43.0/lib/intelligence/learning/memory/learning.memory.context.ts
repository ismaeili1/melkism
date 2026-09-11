import type {
LearningMemoryRecord
} from "./learning.memory.types";


import {
LearningMemoryRetrievalService
} from "./learning.memory.retrieval";



export interface LearningMemoryContext {


experiences:
LearningMemoryRecord[];


count:number;


createdAt:Date;


}



export class LearningMemoryContextBridge {



private retrieval =
new LearningMemoryRetrievalService();



constructor(
records:LearningMemoryRecord[] = []
){

this.retrieval =
new LearningMemoryRetrievalService(records);

}



buildContext()
:LearningMemoryContext {


const experiences =
this.retrieval
.retrieveRecentMemory(50);



return {

experiences,

count:
experiences.length,

createdAt:
new Date()

};


}



getExperienceContext(
experienceId:string
){


return {

experiences:
this.retrieval
.retrieveExperience(experienceId),

createdAt:
new Date()

};


}



getAgentContext(
agentId:string
){


return {

experiences:
this.retrieval
.retrieveAgentMemory(agentId),

createdAt:
new Date()

};


}



summarizeContext(){


return {

memoryCount:
this.retrieval.countMemory(),

generatedAt:
new Date()

};


}



}
