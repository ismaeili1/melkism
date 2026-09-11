import type {
MemoryRecord
} from "./memory.record";



export class IntelligenceMemoryStore {



private records:
MemoryRecord[] = [];



add(
record:MemoryRecord
){


this.records.push(record);


return record;


}



getAll(){


return this.records;


}



findById(
id:string
){


return this.records.find(

record=>

record.id===id

);


}



}


