/**
 * MELKISM Entity Extraction Contract
 *
 * v0.4.0
 *
 * Boundary between content
 * and intelligence providers.
 */


import type {
 ContentEntity,
} from "../entities";



export type EntityExtractionRequest = {


 contentId:
 string;



 text:
 string;



 language?:
 string;


};



export type EntityExtractionResult = {


 contentId:
 string;



 entities:
 readonly ContentEntity[];



 confidence:
 number;


};



export interface EntityExtractor {


 extract(
  request:
  EntityExtractionRequest
 ):
 Promise<EntityExtractionResult>;


}
