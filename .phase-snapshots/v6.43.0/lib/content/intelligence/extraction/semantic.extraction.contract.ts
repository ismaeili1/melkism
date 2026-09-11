/**
 * MELKISM Semantic Extraction Contract
 *
 * v0.4.0
 */


import type {
 SemanticContent,
} from "../contracts";



export type SemanticExtractionRequest = {


 contentId:
 string;



 text:
 string;



 language?:
 string;


};



export interface SemanticExtractor {


 extract(
  request:
  SemanticExtractionRequest
 ):
 Promise<SemanticContent>;


}
