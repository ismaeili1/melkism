/**
 * MELKISM Data Orchestration Layer
 * v38.20.14
 */


export interface WorkflowRecord {


name:string;

status:string;

createdAt:Date;

}



export class DataOrchestrationLayer {


private history:
WorkflowRecord[] = [];



createWorkflow(

name:string

){


const workflow:
WorkflowRecord = {


name,

status:"created",

createdAt:new Date()


};


this.history.push(workflow);


return workflow;


}



executeWorkflow(

name:string

){


return this.createWorkflow(

name

);


}



getWorkflowHistory(){


return this.history;


}


}
