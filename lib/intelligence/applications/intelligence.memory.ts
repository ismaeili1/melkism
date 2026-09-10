import type {

IntelligenceMemoryRecord,

IntelligenceMemoryResult

} from "./intelligence.memory.types";



export class IntelligenceMemoryBridge {



store(

domain:string,

entityId:string,

content:string

):IntelligenceMemoryResult {



const memory:IntelligenceMemoryRecord={


id:crypto.randomUUID(),


domain,


entityId,


type:"pattern",


content,


importance:1,


createdAt:new Date(),


updatedAt:new Date()


};



return {


entityId,


memories:[memory],


createdAt:new Date()


};



}



}



