export interface CognitiveProcess {


id:string;


type:string;


priority:

"critical"|
"important"|
"normal"|
"background";


status:

"created"|
"queued"|
"running"|
"completed"|
"failed";


createdAt:Date;

}



export class CognitiveProcessRegistry {


private processes =
new Map<string,CognitiveProcess>();


register(process:CognitiveProcess){

this.processes.set(process.id,process);

return process;

}



get(id:string){

return this.processes.get(id);

}



list(){

return Array.from(this.processes.values());

}

}
