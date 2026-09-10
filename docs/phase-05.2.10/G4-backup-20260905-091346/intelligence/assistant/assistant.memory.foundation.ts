/**
 * MELKISM Assistant Memory Foundation
 * v38.20.14
 */


export interface MemoryRecord {


key:string;

value:unknown;

createdAt:Date;

}



export class AssistantMemoryFoundation {


private history:
MemoryRecord[]=[];



storeMemory(

key:string,

value:unknown

){


const memory:
MemoryRecord={


key,

value,

createdAt:new Date()


};


this.history.push(memory);


return memory;


}



retrieveMemory(

key:string

){


return this.history.filter(

item=>item.key===key

);


}



getMemoryHistory(){


return this.history;


}


}
