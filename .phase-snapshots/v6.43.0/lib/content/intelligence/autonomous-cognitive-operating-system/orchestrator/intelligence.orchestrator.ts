export class IntelligenceOrchestrator {


private layers:string[]=[];



register(layer:string){

this.layers.push(layer);

}



getLayers(){

return this.layers;

}

}
