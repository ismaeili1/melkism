/**
 * MELKISM Context Matching Engine
 * v38.20.14
 */


export interface ContextMatchRecord {


query:string;

context:unknown;

score:number;

createdAt:Date;

}



export class ContextMatchingEngine {


private history:ContextMatchRecord[]=[];



matchContext(

query:string,

context:unknown

){


const record:ContextMatchRecord={


query,

context,

score:100,

createdAt:new Date()


};


this.history.push(record);


return record;


}



calculateRelevance(

query:string,

context:unknown

){


return 100;


}



getMatchingHistory(){


return this.history;


}


}
