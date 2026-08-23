/**
 * MELKISM Content Query Composition
 *
 * v0.2.8
 *
 * Creates query runtime dependencies.
 */


import {
  ContentQueryRuntime,
} from "../runtime/content.query.runtime";


import type {
  ContentRuntimeStorage,
} from "../../runtime/content.storage.runtime";



export type ContentQueryDependencies = {

  storage:
  ContentRuntimeStorage;

};



export function createContentQueryRuntime(
 dependencies:
 ContentQueryDependencies
) {


 return new ContentQueryRuntime(
   dependencies.storage
 );


}
