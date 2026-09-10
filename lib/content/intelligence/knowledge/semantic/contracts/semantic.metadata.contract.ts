/**
 * MELKISM Semantic Metadata Contract
 *
 * v0.8.1
 */


export type SemanticDomain =

 | "real_estate"
 | "architecture"
 | "urbanism"
 | "market"
 | "investment"
 | "technology"
 | "general";



export interface SemanticMetadataContract {


 domain:
   SemanticDomain;


 concepts:
   readonly string[];


 keywords?:
   readonly string[];


 confidence?:
   number;


 language?:
   string;


 metadata?:
   Record<string, unknown>;

}
