import type {

KnowledgeItem,

RetrievalQuery,

RetrievalResult

} from "./retrieval.types";



export class KnowledgeRetrievalEngine {



private knowledge:
KnowledgeItem[] = [];



add(
item:KnowledgeItem
){


this.knowledge.push(item);


return item;


}



retrieve(
request:RetrievalQuery
):RetrievalResult[]{


const limit =
request.limit ?? 10;



return this.knowledge

.filter(item=>

item.content

.toLowerCase()

.includes(

request.query

.toLowerCase()

)

)

.slice(0,limit)

.map(item=>({

item,

score:1

}));



}



}


