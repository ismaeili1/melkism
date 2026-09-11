/**
 * MELKISM Intelligence Runtime Persistence Adapter
 */


import {

persistRuntimeEvent,
getPersistenceStats

} from "./intelligence.runtime.persistence";



export interface RuntimePersistenceAdapter {


persist(event:any):unknown;


status():unknown;


}



export function createPersistenceAdapter()
:RuntimePersistenceAdapter {


return {


persist(event:any){


return persistRuntimeEvent(event);


},



status(){


return getPersistenceStats();


}


};


}



export function persistEventThroughAdapter(
event:any
){


const adapter=
createPersistenceAdapter();


return adapter.persist(event);


}



export function getAdapterStatus(){


const adapter=
createPersistenceAdapter();


return adapter.status();


}

