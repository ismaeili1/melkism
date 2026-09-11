import type {

MemoryEntity,

MemoryType

} from "./memory.types";



export class MemoryEngine {



private memories:
MemoryEntity[] = [];



store(

type:MemoryType,

title:string,

content:unknown,

importance:number

){


const memory:MemoryEntity={


id:
crypto.randomUUID(),


type,


title,


content,


importance,


createdAt:
new Date()


};



this.memories.push(memory);


return memory;


}



retrieveByType(

type:MemoryType

){


return this.memories.filter(

memory=>

memory.type===type

);


}



retrieveImportant(

minimum:number

){


return this.memories.filter(

memory=>

memory.importance>=minimum

);


}



getAll(){

return this.memories;

}



}



