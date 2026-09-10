export class CognitiveStateManager {


private state:string="INITIALIZED";



set(state:string){

this.state=state;

}



get(){

return this.state;

}

}
