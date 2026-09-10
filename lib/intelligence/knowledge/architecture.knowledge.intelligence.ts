/**
 * MELKISM Architecture Knowledge Intelligence
 * v38.20.14
 */


export interface ArchitectureKnowledgeRecord {


topic:string;

knowledge:unknown;

createdAt:Date;

}



export class ArchitectureKnowledgeIntelligence {


private history:
ArchitectureKnowledgeRecord[] = [];



createArchitectureRecord(

topic:string,

knowledge:unknown

){


const record:
ArchitectureKnowledgeRecord = {


topic,

knowledge,

createdAt:new Date()


};


this.history.push(record);


return record;


}



analyzeArchitectureKnowledge(

topic:string

){


return this.history.find(

item =>
item.topic===topic

);


}



getArchitectureHistory(){


return this.history;


}


}
