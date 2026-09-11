export type AITask = {

id:string;

action:string;

};


export function createTask(
id:string,
action:string
){

return {

id,
action

};

}
