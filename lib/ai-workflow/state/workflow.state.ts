export interface WorkflowState {

current:string;

createdAt:string;

}


export function initialWorkflowState():

WorkflowState {


return {

current:"created",

createdAt:
new Date().toISOString()

};


}


