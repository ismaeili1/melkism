export class CognitiveTaskQueueManager {


private queue:string[]=[];



enqueue(task:string){

this.queue.push(task);

return task;

}



dequeue(){

return this.queue.shift();

}



list(){

return this.queue;

}

}
