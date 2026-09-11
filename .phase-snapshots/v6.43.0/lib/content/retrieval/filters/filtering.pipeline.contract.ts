/**
 * MELKISM Filtering Pipeline Contract
 *
 * v0.3.2
 */



import type {
 ContentRetrievalItem,
 ContentRetrievalRequest,
} from "../contracts";



import type {
 ContentFilterContract,
} from "./content.filter.contract";



export interface FilteringPipelineContract {


 execute(

  items:
  readonly ContentRetrievalItem[],

  request:
  ContentRetrievalRequest,

  filters:
  readonly ContentFilterContract[]

 ):
 Promise<readonly ContentRetrievalItem[]>;


}
