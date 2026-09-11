export class CognitiveEventBus {


emit(event:string){

return {

event,

timestamp:new Date()

};

}

}
