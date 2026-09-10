import type {

MemoryEntity

} from "../memory/memory.types";


import type {

IntelligenceContext

} from "../context/context.types";



export class MemoryIntegration {


createContext(

memory:MemoryEntity[]

):IntelligenceContext {


return {


id:crypto.randomUUID(),


type:"intelligence",


data:memory,


createdAt:new Date()


};


}



}

