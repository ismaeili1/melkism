import type {

IntelligenceContext

} from "./context.types";



export class ContextManager {



private context:
IntelligenceContext|null = null;



create(
sessionId:string,
userId?:string
){


this.context={

sessionId,

userId,

data:{},

createdAt:new Date(),

updatedAt:new Date()

};


return this.context;


}



update(
data:Record<string,unknown>
){


if(!this.context){

throw new Error(
"Context not initialized"
);

}


this.context={

...this.context,

data:{

...this.context.data,

...data

},

updatedAt:new Date()

};



return this.context;


}



get(){


return this.context;


}



}


