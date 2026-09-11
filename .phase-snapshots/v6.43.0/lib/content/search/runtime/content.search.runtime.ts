/**
 * MELKISM Content Search Runtime
 *
 * v0.2.9
 *
 * Executes technology independent
 * content search operations.
 *
 * This runtime does not know:
 *
 * - database
 * - search engine
 * - API
 *
 */


import type {

 ContentSearchContract,

 ContentSearchRequest,

 ContentSearchResult,

} from "../contracts";


import type {

 ContentStorageRuntime,

} from "../../runtime/content.storage.runtime";




export class ContentSearchRuntime
implements ContentSearchContract {



 constructor(
  private readonly storage:
  ContentStorageRuntime
 ){}




 async search(
  request:
  ContentSearchRequest
 ):
 Promise<ContentSearchResult>{



 const items =
 await this.storage.list();



 let result =
 items;



 if(request.query){


  const query =
  request.query.toLowerCase();



  result =
  result.filter(
   item =>

    item.title
    .toLowerCase()
    .includes(query)

    ||

    item.content
    .toLowerCase()
    .includes(query)

  );


 }



 if(request.language){


  result =
  result.filter(

   item =>

   item.language ===
   request.language

  );


 }



 const total =
 result.length;



 if(request.limit){


  result =
  result.slice(
   0,
   request.limit
  );


 }



 return {


  items:

  result.map(
   item => ({

    id:
    item.id,

    title:
    item.title,

    language:
    item.language,

   })
  ),


  total,


 };


 }



}
