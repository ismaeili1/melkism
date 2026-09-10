/**
 * MELKISM Knowledge Query Intelligence
 * v38.20.14
 */


export interface KnowledgeQueryRecord {


query:string;

intent:string;

createdAt:Date;

}



export class KnowledgeQueryIntelligence {


private history:
KnowledgeQueryRecord[] = [];



createQuery(

query:string

){


const record:
KnowledgeQueryRecord = {


query,

intent:"unknown",

createdAt:new Date()


};


this.history.push(record);


return record;


}



analyzeQuery(

query:string

){


return {


query,

intent:"knowledge-search"


};


}



getQueryHistory(){


return this.history;


}


}
