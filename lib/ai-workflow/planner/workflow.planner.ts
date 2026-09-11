import type {

AIWorkflowTask

} from "../contracts/workflow.types";


export function createWorkflowPlan(

tasks:AIWorkflowTask[]

){

return {

count:tasks.length,

tasks

};

}


