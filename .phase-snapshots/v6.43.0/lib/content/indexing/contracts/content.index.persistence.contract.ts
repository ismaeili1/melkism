/**
 * MELKISM Content Index Persistence Contract
 *
 * v0.3.1
 *
 * Defines persistence boundary for content index.
 *
 * This layer does not know:
 *
 * - database
 * - ORM
 * - search engine
 * - storage technology
 */

import type {
  ContentIndexEntry,
} from "./content.index.contract";


export interface ContentIndexPersistenceContract {


  save(
    entry: ContentIndexEntry
  ):
  Promise<ContentIndexEntry>;



  findById(
    id:string
  ):
  Promise<ContentIndexEntry | undefined>;



  delete(
    id:string
  ):
  Promise<boolean>;



  list():
  Promise<readonly ContentIndexEntry[]>;



  exists(
    id:string
  ):
  Promise<boolean>;


}
