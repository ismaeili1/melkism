import {
saveContext,
readContext,
deleteContext,
clearContexts
}
from "./intelligence.context.store";


export function createContext(
input:any
){


const context={


id:
crypto.randomUUID(),


userId:
input.userId,


domain:
input.domain,


sessionData:
input.data,


createdAt:
new Date().toISOString(),


updatedAt:
new Date().toISOString()


};



return saveContext(context);

}



export function getContext(
id:string
){

return readContext(id);

}



export function updateContext(
id:string,
data:any
){


const current=
readContext(id);


if(!current){

return null;

}


const updated={


...current,


sessionData:data,


updatedAt:
new Date().toISOString()


};


return saveContext(updated);

}



export function clearContext(
id:string
){

return deleteContext(id);

}


export {
clearContexts
};

