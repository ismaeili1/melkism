export interface CognitiveCapability {


id:string;


domain:string;


level:number;


potential:number;


status:

"available"|
"expanding"|
"expanded";

}



export class CognitiveCapabilityRegistry {


private capabilities=

new Map<string,CognitiveCapability>();



register(capability:CognitiveCapability){

this.capabilities.set(

capability.id,

capability

);

return capability;

}



get(id:string){

return this.capabilities.get(id);

}



list(){

return Array.from(this.capabilities.values());

}

}
