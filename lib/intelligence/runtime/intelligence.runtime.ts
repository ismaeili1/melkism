import type {

IntelligenceRuntime,

RuntimeStatus

} from "./runtime.types";



export class IntelligenceRuntimeEngine {



private runtimes:IntelligenceRuntime[]=[];



create(

pipelineId?:string

){


const runtime:IntelligenceRuntime={


id:crypto.randomUUID(),


pipelineId,


status:"idle",


state:{},


createdAt:new Date(),


updatedAt:new Date()


};



this.runtimes.push(runtime);


return runtime;

}



start(

runtime:IntelligenceRuntime

){


runtime.status="running";

runtime.updatedAt=new Date();


return runtime;

}



update(

runtime:IntelligenceRuntime,

state:Record<string,unknown>

){


runtime.state={

...runtime.state,

...state

};


runtime.updatedAt=new Date();


return runtime;

}



complete(

runtime:IntelligenceRuntime

){


runtime.status="completed";

runtime.updatedAt=new Date();


return runtime;

}



fail(

runtime:IntelligenceRuntime

){


runtime.status="failed";

runtime.updatedAt=new Date();


return runtime;

}



getAll(){

return this.runtimes;

}


}

