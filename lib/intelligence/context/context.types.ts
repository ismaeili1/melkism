import type {

RetrievalResult

} from "../retrieval/retrieval.types";



export type ContextType =

"knowledge"

|

"retrieval"

|

"intelligence";



export interface IntelligenceContext {


id:string;



type?:ContextType;



query?:string;



results?:RetrievalResult[];



data?:unknown;



sources?:unknown;



metadata?:unknown;



createdAt:Date;



}


