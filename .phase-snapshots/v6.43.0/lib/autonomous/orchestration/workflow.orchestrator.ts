import type {

IntelligenceWorkflow

} from "./workflow.types";



export class WorkflowOrchestrator {



private workflows:
IntelligenceWorkflow[] = [];



create(
name:string,
tasks:string[]
){


const workflow:IntelligenceWorkflow={


id:
crypto.randomUUID(),


name,


tasks,


status:
"created",


createdAt:
new Date()


};



this.workflows.push(workflow);


return workflow;


}



start(
workflowId:string
){


const workflow =

this.workflows.find(

item=>

item.id===workflowId

);



if(!workflow){

throw new Error(
"Workflow not found"
);

}



workflow.status="running";


return workflow;


}



complete(
workflowId:string
){


const workflow =

this.workflows.find(

item=>

item.id===workflowId

);



if(!workflow){

throw new Error(
"Workflow not found"
);

}



workflow.status="completed";


return workflow;


}



getWorkflows(){


return this.workflows;


}



}



