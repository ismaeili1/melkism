import type {

IntelligenceContext,

ContextType

} from "./context.types";



export class ContextEngine {



private contexts:
IntelligenceContext[] = [];



create(

type:ContextType,

data:unknown,

sources:string[]

){


const context:IntelligenceContext={


id:
crypto.randomUUID(),


type,


data,


sources,


createdAt:
new Date()


};



this.contexts.push(context);


return context;


}



getContext(id:string){


return this.contexts.find(

context=>

context.id===id

);


}



getAll(){


return this.contexts;


}



}



