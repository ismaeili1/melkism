export type ApiDocMethod =
 | "GET"
 | "POST"
 | "PUT"
 | "DELETE";


export interface ApiEndpointDocumentation {

 path:string;

 method:ApiDocMethod;

 summary:string;

 description:string;

 version:string;

}


export interface ApiDocumentationInfo {

 title:string;

 version:string;

 description:string;

}

