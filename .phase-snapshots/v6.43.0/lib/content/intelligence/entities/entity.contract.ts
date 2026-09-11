/**
 * MELKISM Entity Contract
 *
 * v0.4.0
 *
 * Defines identifiable entities
 * extracted from content.
 */


import type {
 EntityType,
} from "./entity.types";



export type ContentEntity = {


 id:
 string;



 type:
 EntityType;



 name:
 string;



 description?:
 string;



 aliases?:
 readonly string[];



 metadata?:
 Record<string, unknown>;


};
