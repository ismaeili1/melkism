/**
 * MELKISM Intelligence Workflow Engine
 * v38.20.14
 */


export interface IntelligenceWorkflowRecord {


id:string;

module:string;

status:
"created"
|
"running"
|
"completed";


createdAt:Date;

}



export class IntelligenceWorkflowEngine {


private history:
IntelligenceWorkflowRecord[] = [];



createWorkflow(

id:string,

module:string

){


const workflow:
IntelligenceWorkflowRecord = {


id,

module,

status:"created",

createdAt:new Date()


};


this.history.push(workflow);


return workflow;


}



executeWorkflow(

id:string

){


const workflow =
this.history.find(
item=>item.id===id
);



if(workflow){


workflow.status="completed";


}



return workflow;


}



getWorkflowHistory(){


return this.history;


}


}
