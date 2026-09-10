import type {

RetrievalQuery,

RetrievalResult

} from "./retrieval.types";


import type {

MemoryEntity

} from "../memory/memory.types";



export class KnowledgeRetrievalEngine {



retrieve(

memories:MemoryEntity[],

query:RetrievalQuery

):RetrievalResult[]{



const keyword=query.keyword.toLowerCase();



return memories

.filter(memory=>{


const title=

memory.title?.toLowerCase() ?? "";



const content=

String(memory.content ?? "").toLowerCase();



return (

title.includes(keyword)

||

content.includes(keyword)

);


})


.slice(0,query.limit ?? 10)

.map(memory=>({


memoryId:memory.id,


title:memory.title,


content:memory.content,


score:1


}));



}



}

