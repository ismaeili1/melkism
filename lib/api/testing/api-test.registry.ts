import type {
 ApiTestCase,
} from "./api-test.types";


const registry:ApiTestCase[] = [];



export function registerApiTest(
 test:ApiTestCase
){


 const exists =
 registry.some(
 item =>
 item.id === test.id
 );


 if(!exists){

    registry.push(test);

 }


}



export function getApiTests(){

 return [...registry];

}


