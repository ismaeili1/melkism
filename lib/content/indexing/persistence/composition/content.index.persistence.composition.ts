import type {
 ContentIndexPersistenceContract,
} from "../../contracts";


import {
 ContentIndexMemoryPersistenceAdapter,
} from "./../adapters";



export type ContentIndexPersistenceDependencies = {

 persistence:
 ContentIndexPersistenceContract;

};



export function createMemoryIndexPersistence():

ContentIndexPersistenceDependencies {

 return {

  persistence:
  new ContentIndexMemoryPersistenceAdapter()

 };

}



export function createDefaultIndexPersistence(){

 return createMemoryIndexPersistence();

}
