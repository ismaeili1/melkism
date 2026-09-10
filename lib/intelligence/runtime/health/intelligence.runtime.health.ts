export interface IntelligenceRuntimeHealth {

 healthy:boolean;

 registry:boolean;

 runtime:boolean;

 timestamp:string;

}


export function createRuntimeHealth(
registry:boolean,
runtime:boolean
):IntelligenceRuntimeHealth{


return {

healthy:
registry && runtime,

registry,

runtime,

timestamp:
new Date().toISOString()

};


}

