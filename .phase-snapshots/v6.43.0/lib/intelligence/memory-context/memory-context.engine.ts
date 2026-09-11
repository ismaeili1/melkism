import type {

MemoryContext,

MemoryContextType

} from "./memory-context.types";



export class MemoryContextEngine {



private contexts:
MemoryContext[] = [];



create(

type:MemoryContextType,

memories:string[],

experiences:string[]

){


const context:MemoryContext={


id:
crypto.randomUUID(),


type,


memories,


experiences,


createdAt:
new Date()


};



this.contexts.push(context);


return context;


}



findByType(

type:MemoryContextType

){


return this.contexts.filter(

context=>

context.type===type

);


}



getAll(){


return this.contexts;


}



}



