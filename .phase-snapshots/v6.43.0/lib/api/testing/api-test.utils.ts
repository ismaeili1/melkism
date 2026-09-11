import type {
 ApiTestCase,
} from "./api-test.types";


export function createApiTestCase(
 input:ApiTestCase
):ApiTestCase {


 return {

  ...input,

 };


}



