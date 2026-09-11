import type {
LearningMemoryRecord
} from "./learning.memory.types";


import {
LearningMemoryIndex
} from "./learning.memory.index";


import {
LearningMemoryQueryService
} from "./learning.memory.query";



export class LearningMemoryRetrievalService {


private index =
new LearningMemoryIndex();


private query =
new LearningMemoryQueryService();



constructor(
records:LearningMemoryRecord[] = []
){

this.query.load(records);


for(const record of records){

this.index.add(record);

}

}



retrieveExperience(
experienceId:string
){

return this.query.getByExperienceId(
experienceId
);

}



retrieveAgentMemory(
agentId:string
){

return this.query.getByAgentId(
agentId
);

}



retrieveRecentMemory(
limit:number = 10
){

return this.query.getRecent(
limit
);

}



searchMemory(
predicate:(record:LearningMemoryRecord)=>boolean
){

return this.query
.getAll()
.filter(predicate);

}



countMemory(){

return this.query
.getAll()
.length;

}


}
