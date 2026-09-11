
export interface AIModel {

id:string;

name:string;

provider:string;

status:"active"|"inactive";

}



export interface AIExecution {

id:string;

task:string;

result:string;

}


