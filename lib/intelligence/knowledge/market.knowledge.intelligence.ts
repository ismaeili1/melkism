/**
 * MELKISM Market Knowledge Intelligence
 * v38.20.14
 */


export interface MarketKnowledgeRecord {


market:string;

metrics:unknown;

createdAt:Date;

}



export class MarketKnowledgeIntelligence {


private history:
MarketKnowledgeRecord[] = [];



createMarketRecord(

market:string,

metrics:unknown

){


const record:
MarketKnowledgeRecord = {


market,

metrics,

createdAt:new Date()


};


this.history.push(record);


return record;


}



analyzeMarket(

market:string

){


return this.history.find(

item =>
item.market===market

);


}



getMarketHistory(){


return this.history;


}


}
