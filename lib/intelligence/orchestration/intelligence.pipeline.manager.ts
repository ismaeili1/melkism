/**
 * MELKISM Intelligence Pipeline Manager
 * v38.20.14
 */


export interface IntelligencePipelineRecord {


id:string;

steps:string[];

status:
"created"
|
"running"
|
"completed";


createdAt:Date;

}



export class IntelligencePipelineManager {


private history:
IntelligencePipelineRecord[] = [];



createPipeline(

id:string,

steps:string[]

){


const pipeline:
IntelligencePipelineRecord = {


id,

steps,

status:"created",

createdAt:new Date()


};


this.history.push(pipeline);


return pipeline;


}



executePipeline(

id:string

){


const pipeline =
this.history.find(
item=>item.id===id
);



if(pipeline){


pipeline.status="completed";


}



return pipeline;


}



getPipelineHistory(){


return this.history;


}


}
