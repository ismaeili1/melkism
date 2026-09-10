import type {
 ApiEndpointDocumentation,
} from "./api-doc.types";


export function createEndpointDocumentation(
 data:ApiEndpointDocumentation
){

 return {

  ...data,

 };

}

