export interface CognitiveResource {


id:string;


type:string;


capacity:number;


available:number;


status:

"available"|
"allocated"|
"released";

}



export class CognitiveResourceRegistry {


private resources =

new Map<string,CognitiveResource>();



register(resource:CognitiveResource){

this.resources.set(resource.id,resource);

return resource;

}



get(id:string){

return this.resources.get(id);

}



list(){

return Array.from(this.resources.values());

}

}
