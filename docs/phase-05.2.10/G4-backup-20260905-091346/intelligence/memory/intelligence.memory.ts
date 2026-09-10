import type {

IntelligenceMemory,

MemoryType

} from "./memory.types";



export class IntelligenceMemoryEngine {



private memories:IntelligenceMemory[]=[];



store(

type:MemoryType,

key:string,

value:unknown,

importance:number=0

){


const memory:IntelligenceMemory={


id:crypto.randomUUID(),


type,


key,


value,


importance,


createdAt:new Date(),


updatedAt:new Date()


};



this.memories.push(memory);


return memory;


}



find(

key:string

){


return this.memories.filter(

memory=>memory.key===key

);

}



getAll(){

return this.memories;

}



}

