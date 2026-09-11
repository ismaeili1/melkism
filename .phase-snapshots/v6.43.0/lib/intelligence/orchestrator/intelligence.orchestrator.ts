import type {

IntelligenceContext,

IntelligenceStage

} from "./orchestrator.types";



export class IntelligenceOrchestrator {



private contexts:IntelligenceContext[]=[];



execute(

stage:IntelligenceStage,

input?:unknown

){


const context:IntelligenceContext={


id:crypto.randomUUID(),


stage,


input,


createdAt:new Date()


};



this.contexts.push(context);


return context;


}



complete(

context:IntelligenceContext,

output:unknown

){


context.output=output;


return context;

}



getAll(){

return this.contexts;

}


}

