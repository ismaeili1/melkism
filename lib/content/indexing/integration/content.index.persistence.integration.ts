/**
 * MELKISM Content Index Persistence Integration
 *
 * v0.3.1
 *
 * Connects Index Runtime with Persistence Runtime.
 *
 * This layer knows:
 * - index runtime
 * - persistence runtime
 *
 * It does not know:
 * - database
 * - ORM
 */



import type {
 ContentIndexEntry,
} from "../contracts/content.index.contract";


import {
 ContentIndexRuntime,
} from "../runtime";


import {
 ContentIndexPersistenceRuntime,
} from "../persistence/runtime";



export class ContentIndexPersistenceIntegration {



constructor(
 private readonly index:
 ContentIndexRuntime,

 private readonly persistence:
 ContentIndexPersistenceRuntime
){}



async save(
 entry: ContentIndexEntry
){

 await this.persistence.save(entry);

 return this.index.add(entry);

}



async find(
 id:string
){

 const indexed =
 await this.persistence.findById(id);


 if(!indexed){

   return undefined;

 }


 return this.index.find(id);

}



async delete(
 id:string
){

 const removed =
 await this.persistence.delete(id);


 if(removed){

   return this.index.remove(id);

 }


 return false;

}



}
