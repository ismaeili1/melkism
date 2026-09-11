import {
LearningMemoryRankingService
} from "./learning.memory.ranking";


/**
 * MELKISM Learning Memory Knowledge Bridge
 * v38.20.14
 *
 * Retrieval boundary adapter
 */




import {
LearningMemoryIndex
} from "./learning.memory.index";





import {
  LearningMemoryRetrievalService
} from "./learning.memory.retrieval";


export interface LearningMemoryKnowledgeResult {

  query:string;

  results:unknown[];

}


export class LearningMemoryKnowledgeBridge {


private index =
new LearningMemoryIndex();


private ranking =
new LearningMemoryRankingService();


private retrieval:
LearningMemoryRetrievalService;



constructor(){

this.retrieval =
new LearningMemoryRetrievalService();

}






lookupIndex(
agentId:string
){

return this.index
.getByAgent(agentId);

}







rankResults(
records:any[]
){

return this.ranking.sort(

this.ranking.rank(
records
)

);

}




retrieve(
query:string
):LearningMemoryKnowledgeResult{


const results =
this.retrieval.searchMemory(
record =>
record.input
.toLowerCase()
.includes(
query.toLowerCase()
)
);



return {

query,

results

};


}


}

