import type {
IntelligenceContextState
}
from "./intelligence.context.types";


const contexts:
Map<string,IntelligenceContextState>
=
new Map();



export function saveContext(
context:IntelligenceContextState
){


contexts.set(
context.id,
context
);


return context;

}



export function readContext(
id:string
){


return contexts.get(id);

}



export function deleteContext(
id:string
){


contexts.delete(id);

}



export function clearContexts(){

contexts.clear();

}

