export interface WorkflowPermission {

allowed:boolean;

scope:string;

}


export function checkPermission():

WorkflowPermission {


return {

allowed:false,

scope:"restricted"

};


}


