import {

CognitiveProcessRegistry

}

from "../registry/cognitive.process.registry";


export class CognitiveProcessManager {


registry =

new CognitiveProcessRegistry();



create(process:any){

return this.registry.register(process);

}



list(){

return this.registry.list();

}

}
