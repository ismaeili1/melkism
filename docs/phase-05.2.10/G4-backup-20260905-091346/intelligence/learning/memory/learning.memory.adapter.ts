import type {
LearningMemoryRecord,
LearningMemoryStore
}
from "./learning.memory.types";



export class RuntimeLearningMemoryAdapter
implements LearningMemoryStore {



private records:
LearningMemoryRecord[]=[];



save(
record:LearningMemoryRecord
){

this.records.push(record);

return record;

}



findById(
id:string
){

return this.records.find(
item=>item.id===id
);

}



findAll(){

return this.records;

}


}
