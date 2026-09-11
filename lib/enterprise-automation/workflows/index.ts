export type AIWorkflow = {

name:string;

steps:string[];

};


export function createWorkflow(
name:string
){

return {

name,
steps:[]

};

}
