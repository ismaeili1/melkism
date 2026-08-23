/**
 * MELKISM Content Search Composition
 *
 * v0.2.9
 *
 * Creates the default search dependency graph.
 *
 * This layer selects runtime dependencies.
 *
 * No search technology is introduced here.
 *
 */


import type {

 ContentSearchContract,

} from "../contracts";


import {

 ContentSearchRuntime,

} from "../runtime";


import {

 ContentRuntimeStorage,

} from "../../runtime";



export type ContentSearchDependencies = {

 contentSearch:
 ContentSearchContract;

};



export function createContentSearch(

 storage:
 ContentRuntimeStorage

):
ContentSearchDependencies {


 return {


  contentSearch:

  new ContentSearchRuntime(
   storage
  ),


 };


}




export function createDefaultContentSearch(

 storage:
 ContentRuntimeStorage

):
ContentSearchDependencies {


 return createContentSearch(
  storage
 );


}
