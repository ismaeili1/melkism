export type ApiTestStatus =
  | "pending"
  | "passed"
  | "failed";


export interface ApiTestCase {

 id:string;

 name:string;

 endpoint:string;

 method:string;

 status:ApiTestStatus;

}


