import type {

IntelligenceTask

} from "./task.types";



export class TaskDecomposer {



private tasks:
IntelligenceTask[] = [];



createTask(
title:string,
description:string,
parentId?:string
){


const task:IntelligenceTask={


id:
crypto.randomUUID(),


title,


description,


status:
"pending",


parentId,


createdAt:
new Date()


};



this.tasks.push(task);


return task;


}



getTasks(){


return this.tasks;


}



getChildren(
parentId:string
){


return this.tasks.filter(

task=>

task.parentId===parentId

);


}



}



