/**
 * MELKISM Knowledge Data Pipeline
 * v38.20.14
 */


export interface PipelineEvent {


source:string;

data:unknown;

createdAt:Date;

}



export class KnowledgeDataPipeline {


private history:
PipelineEvent[] = [];



createPipelineEvent(

source:string,

data:unknown

){


const event:
PipelineEvent = {


source,

data,

createdAt:new Date()


};


this.history.push(event);


return event;


}



processPipeline(

source:string,

data:unknown

){


return this.createPipelineEvent(

source,

data

);


}



getPipelineHistory(){


return this.history;


}


}
