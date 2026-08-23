/**
 * MELKISM Content Index Memory Adapter
 *
 * v0.3.0
 *
 * In-memory implementation of ContentIndexContract.
 *
 * This adapter does not use:
 *
 * - database
 * - filesystem
 * - search engine
 */



import type {

 ContentIndexContract,

 ContentIndexEntry,

} from "../contracts";




export class InMemoryContentIndexAdapter

implements ContentIndexContract {



 private readonly entries =
 new Map<string, ContentIndexEntry>();



 private readonly tokenMap =
 new Map<string, Set<string>>();





 async add(
  entry:ContentIndexEntry
 ):
 Promise<void>{


 this.entries.set(
   entry.id,
   entry
 );



 for(const token of entry.tokens){


   const normalized =
   token.toLowerCase();



   const ids =
   this.tokenMap.get(normalized)
   ??
   new Set<string>();


   ids.add(entry.id);


   this.tokenMap.set(
    normalized,
    ids
   );

 }


 }




 async remove(
  id:string
 ):
 Promise<boolean>{



 const removed =
 this.entries.delete(id);



 if(!removed){

   return false;

 }



 for(const ids of this.tokenMap.values()){

   ids.delete(id);

 }



 return true;


 }





 async find(
  token:string
 ):
 Promise<readonly ContentIndexEntry[]>{



 const normalized =
 token.toLowerCase();



 const ids =
 this.tokenMap.get(normalized);



 if(!ids){

   return [];

 }



 return Array.from(ids)
 .map(
  id =>
  this.entries.get(id)
 )
 .filter(
  (
   item
  ):
  item is ContentIndexEntry =>
  Boolean(item)
 );


 }





 async clear():
 Promise<void>{


 this.entries.clear();

 this.tokenMap.clear();


 }


}