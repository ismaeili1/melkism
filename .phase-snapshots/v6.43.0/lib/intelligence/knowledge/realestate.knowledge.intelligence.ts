/**
 * MELKISM Real Estate Knowledge Intelligence
 * v38.20.14
 */


export interface RealEstateKnowledgeRecord {


subject:string;

knowledge:unknown;

createdAt:Date;

}



export class RealEstateKnowledgeIntelligence {


private history:
RealEstateKnowledgeRecord[] = [];



createPropertyKnowledge(

subject:string,

knowledge:unknown

){


const record:
RealEstateKnowledgeRecord = {


subject,

knowledge,

createdAt:new Date()


};


this.history.push(record);


return record;


}



analyzeRealEstateKnowledge(

subject:string

){


return this.history.find(

item =>
item.subject===subject

);


}



getRealEstateHistory(){


return this.history;


}


}
