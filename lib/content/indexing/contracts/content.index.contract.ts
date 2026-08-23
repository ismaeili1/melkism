/**
 * MELKISM Content Index Contract
 *
 * v0.3.0
 *
 * Defines the abstraction boundary for content indexing.
 *
 * This contract does not know:
 *
 * - database
 * - search engine
 * - filesystem
 * - external services
 */


export type ContentIndexEntry = {

  id:string;

  tokens:string[];

  language:string;

  metadata:
  Record<string, unknown>;

};



export interface ContentIndexContract {


  add(
    entry:ContentIndexEntry
  ):
  Promise<void>;



  remove(
    id:string
  ):
  Promise<boolean>;



  find(
    token:string
  ):
  Promise<readonly ContentIndexEntry[]>;



  clear():
  Promise<void>;


}