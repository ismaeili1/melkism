export class CognitiveProcessScheduler {


private queue:string[]=[];



schedule(process:string){

this.queue.push(process);

return process;

}



list(){

return this.queue;

}

}
