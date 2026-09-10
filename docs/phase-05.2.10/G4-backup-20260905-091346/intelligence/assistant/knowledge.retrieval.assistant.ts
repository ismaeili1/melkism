/**
 * MELKISM Knowledge Retrieval Assistant
 * v38.20.14
 */


export interface RetrievalRecord {

query:string;

result:unknown;

createdAt:Date;

}



export class KnowledgeRetrievalAssistant {


private history:RetrievalRecord[]=[];



retrieveKnowledge(query:string){


const record:RetrievalRecord={

query,

result:null,

createdAt:new Date()

};


this.history.push(record);


return record;


}



searchKnowledge(query:string){


return this.retrieveKnowledge(query);


}



getRetrievalHistory(){


return this.history;


}


}
