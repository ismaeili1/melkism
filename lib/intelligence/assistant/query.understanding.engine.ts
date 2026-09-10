/**
 * MELKISM Query Understanding Engine
 * v38.20.14
 */


export interface QueryUnderstandingRecord {


query:string;

intent:string;

context:unknown;

createdAt:Date;

}



export class QueryUnderstandingEngine {


private history:
QueryUnderstandingRecord[]=[];



understandQuery(

query:string

){


const record:
QueryUnderstandingRecord={


query,

intent:"unknown",

context:null,

createdAt:new Date()


};


this.history.push(record);


return record;


}



detectIntent(

query:string

){


return {


intent:"unknown",

query


};


}



getUnderstandingHistory(){


return this.history;


}



}
