/**
 * MELKISM Content Index Runtime
 *
 * v0.3.0
 *
 * Coordinates content indexing operations.
 *
 * This runtime does not know:
 *
 * - database
 * - filesystem
 * - search engine
 *
 * It only depends on ContentIndexContract.
 */



import type {

 ContentIndexContract,

 ContentIndexEntry,

} from "../contracts";




export class ContentIndexRuntime {



 constructor(
  private readonly index:
  ContentIndexContract
 ){}





 async add(
  entry:
  ContentIndexEntry
 ):
 Promise<void>{


 return this.index.add(
  entry
 );


 }





 async remove(
  id:string
 ):
 Promise<boolean>{


 return this.index.remove(
  id
 );


 }





 async find(
  token:string
 ):
 Promise<readonly ContentIndexEntry[]>{


 return this.index.find(
  token
 );


 }





 async clear():
 Promise<void>{


 return this.index.clear();


 }



}