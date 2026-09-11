/**
 * MELKISM Content Filter Contract
 *
 * v0.3.2
 *
 * Defines a content filtering boundary.
 *
 * This contract does not know:
 *
 * - database
 * - search engine
 * - storage
 * - index implementation
 */



import type {
 ContentRetrievalItem,
 ContentRetrievalRequest,
} from "../contracts";



export interface ContentFilterContract {


 apply(
   items:
   readonly ContentRetrievalItem[],

   request:
   ContentRetrievalRequest

 ):
 Promise<readonly ContentRetrievalItem[]>;


}
