/**
 * MELKISM Learning Memory Index
 * v38.20.14
 *
 * Knowledge indexing foundation
 */


import type {
LearningMemoryRecord
} from "./learning.memory.types";



export interface LearningMemoryIndexEntry {

key:string;

records:LearningMemoryRecord[];

}



export class LearningMemoryIndex {


private index:
Map<string,LearningMemoryRecord[]> =
new Map();



add(
record:LearningMemoryRecord
){


const key =
record.agentId;


const current =
this.index.get(key)
||
[];


current.push(record);


this.index.set(
key,
current
);


return record;

}



getByAgent(
agentId:string
){

return (
this.index.get(agentId)
||
[]
);

}



clear(){

this.index.clear();

}



size(){

return this.index.size;

}


}