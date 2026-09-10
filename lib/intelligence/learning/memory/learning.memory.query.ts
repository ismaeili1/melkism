import type {
LearningMemoryRecord
} from "./learning.memory.types";


export class LearningMemoryQueryService {


private records:LearningMemoryRecord[] = [];


load(
records:LearningMemoryRecord[]
){

this.records = records;

return this.records;

}



getAll(){

return this.records;

}



getByExperienceId(
experienceId:string
){

return this.records.filter(

record =>
record.experienceId === experienceId

);

}



getByAgentId(
agentId:string
){

return this.records.filter(

record =>
record.agentId === agentId

);

}



getRecent(
limit:number = 10
){

return this.records
.slice(-limit);

}



}
